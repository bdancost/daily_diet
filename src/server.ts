// src/server.ts
import fastify from 'fastify'
import { env } from './env'

const app = fastify({
  logger: true, // mantém o logger interno do Fastify
})

app.get('/', async () => {
  return { message: 'API rodando!' }
})

const start = async () => {
  try {
    await app.listen({ port: env.PORT, host: '0.0.0.0' }) // 0.0.0.0 acessível na rede e localhost
    // Nenhum console.log extra aqui, Fastify já loga a inicialização
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
