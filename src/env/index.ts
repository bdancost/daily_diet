import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string().min(16),
  PG_HOST: z.string(),
  PG_PORT: z.coerce.number().default(5432),
  PG_USER: z.string(),
  PG_PASSWORD: z.string(),
  PG_DATABASE: z.string(),
})

export const env = envSchema.parse(process.env)
