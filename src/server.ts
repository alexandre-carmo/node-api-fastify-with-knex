import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'

import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(fastifyCookie)

app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] - Global preHandler: ${request.url} `)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP Server Running!')
})
