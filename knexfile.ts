import 'dotenv/config'
import type { Knex } from 'knex'

const config: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT || 5432),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  migrations: {
    directory: './db/migrations',
    extension: 'ts',
    loadExtensions: ['.ts'],
    tableName: 'knex_migrations',
  },
}

module.exports = config
export default config
