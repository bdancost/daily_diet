import Fastify from 'fastify'
import jwt from '@fastify/jwt'
import { env } from './env'
import { authRoutes } from './routes/auth'
import { mealsRoutes } from './routes/meals'

export function buildApp() {
  const app = Fastify({ logger: true })

  app.register(jwt, { secret: env.JWT_SECRET })

  app.register(authRoutes, { prefix: '/auth' })
  app.register(mealsRoutes, { prefix: '/meals' })

  app.get('/health', async () => ({ status: 'ok' }))

  return app
}
