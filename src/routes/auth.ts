import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { db } from '../db/knex'
import { randomUUID } from 'crypto'
import bcrypt from 'bcryptjs'

export async function authRoutes(app: FastifyInstance) {
  // Registro de usuário
  app.post('/register', async (request, reply) => {
    const bodySchema = z.object({
      name: z.string().min(1),
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { name, email, password } = bodySchema.parse(request.body)

    const existing = await db('users').where({ email }).first()
    if (existing) return reply.status(409).send({ message: 'Email already in use' })

    const password_hash = await bcrypt.hash(password, 10)

    await db('users').insert({
      id: randomUUID(),
      name,
      email,
      password_hash,
    })

    return reply.status(201).send({ message: 'User created' })
  })

  // Login
  app.post('/login', async (request, reply) => {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    })

    const { email, password } = bodySchema.parse(request.body)

    const user = await db('users').where({ email }).first()
    if (!user) return reply.status(401).send({ message: 'Invalid credentials' })

    const valid = await bcrypt.compare(password, user.password_hash)
    if (!valid) return reply.status(401).send({ message: 'Invalid credentials' })

    const token = app.jwt.sign({ sub: user.id, name: user.name, email: user.email })

    return reply.send({ token })
  })

  // Perfil do usuário autenticado
  app.get('/me', { preHandler: [async (req) => req.jwtVerify()] }, async (request) => {
    const payload = request.user as { sub: string; name: string; email: string }
    return { id: payload.sub, name: payload.name, email: payload.email }
  })
}
