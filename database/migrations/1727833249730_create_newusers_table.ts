import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').nullable()
      table.string('email').notNullable().unique()
      table.timestamp('email_verified_at').nullable()
      table.string('password').notNullable()
      table.integer('rol_id').unsigned().references('id').inTable('roles')
      table.integer('created_by').unsigned().references('id').inTable('users')
      table.timestamp('created_at').notNullable().defaultTo(this.now())
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
