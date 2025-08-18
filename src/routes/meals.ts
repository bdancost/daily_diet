import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { db } from '../db/knex'
import { ensureAuth } from '../plugins/auth'
import { randomUUID } from 'crypto'

function longestOnDietStreak(rows: Array<{ occurred_at: Date; is_on_diet: boolean }>) {
  // Ordena por data/hora crescente
  const sorted = [...rows].sort(
    (a, b) => new Date(a.occurred_at).getTime() - new Date(b.occurred_at).getTime()
  )
  let best = 0
  let current = 0
  for (const r of sorted) {
    if (r.is_on_diet) {
      current += 1
      if (current > best) best = current
    } else {
      current = 0
    }
  }
  return best
}

export async function mealsRoutes(app: FastifyInstance) {
  // Cria refeição
  app.post('/', { preHandler: [ensureAuth] }, async (request, reply) => {
    const bodySchema = z.object({
      name: z.string().min(1),
      description: z.string().default(''),
      occurredAt: z.coerce.date(),
      isOnDiet: z.boolean(),
    })

    const { name, description, occurredAt, isOnDiet } = bodySchema.parse(request.body)
    const userId = (request.user as any).sub as string

    await db('meals').insert({
      id: randomUUID(),
      user_id: userId,
      name,
      description,
      occurred_at: occurredAt,
      is_on_diet: isOnDiet,
    })

    return reply.status(201).send()
  })

  // Lista todas as refeições do usuário
  app.get('/', { preHandler: [ensureAuth] }, async (request) => {
    const userId = (request.user as any).sub as string
    const meals = await db('meals')
      .select(
        'id',
        'name',
        'description',
        'occurred_at as occurredAt',
        'is_on_diet as isOnDiet',
        'created_at as createdAt',
        'updated_at as updatedAt'
      )
      .where({ user_id: userId })
      .orderBy('occurred_at', 'desc')

    return { meals }
  })

  // Obtém uma refeição específica
  app.get('/:id', { preHandler: [ensureAuth] }, async (request, reply) => {
    const paramsSchema = z.object({ id: z.string().uuid() })
    const { id } = paramsSchema.parse(request.params)
    const userId = (request.user as any).sub as string

    const meal = await db('meals')
      .select(
        'id',
        'name',
        'description',
        'occurred_at as occurredAt',
        'is_on_diet as isOnDiet',
        'created_at as createdAt',
        'updated_at as updatedAt'
      )
      .where({ id, user_id: userId })
      .first()

    if (!meal) return reply.status(404).send({ message: 'Meal not found' })
    return { meal }
  })
}

// Obtém estatísticas
