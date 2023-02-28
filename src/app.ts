import fastifyCookie from '@fastify/cookie'
import fastify from 'fastify'

import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(fastifyCookie)

app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] - Global preHandler: ${request.url} `)
})

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
