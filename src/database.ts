import { knex as setupkex } from 'knex'

export const knex = setupkex({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
