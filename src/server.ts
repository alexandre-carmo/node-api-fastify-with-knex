import fastify from 'fastify'

import { env } from './env'
import { knex } from './database/configs'

const app = fastify()

app.get('/hello', async () => {
  const tables = knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
