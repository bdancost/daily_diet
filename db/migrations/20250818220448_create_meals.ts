import { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('meals', (table) => {
    table.uuid('id').primary()
    table.uuid('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.string('name').notNullable()
    table.text('description').defaultTo('')
    table.timestamp('occurred_at', { useTz: true }).notNullable()
    table.boolean('is_on_diet').notNullable().defaultTo(true)
    table.timestamp('created_at', { useTz: true }).defaultTo(knex.fn.now())
    table.timestamp('updated_at', { useTz: true }).defaultTo(knex.fn.now())
    table.index(['user_id', 'occurred_at'])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('meals')
}
