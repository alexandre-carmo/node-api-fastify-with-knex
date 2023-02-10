import { knex as setupkex } from 'knex'

export const config = {
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
  useNullAsDefault: true,
}

export const knex = setupkex(config)
