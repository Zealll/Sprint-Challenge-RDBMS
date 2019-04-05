
exports.up = function(knex, Promise) {
  return knex.schema 
  .createTable('projects', tbl => {
      tbl.increments()

      tbl.string('name').notNullable().unique()

      tbl.string('description', 400).notNullable()

      tbl.boolean('completed').notNullable().defaultTo(false)
  })

  .createTable('actions', tbl => {
      tbl.increments()

      tbl.string('description', 400).notNullable()

      tbl.string('notes')

      tbl.integer('project_id')
         .notNullable()
         .unsigned()
         .references('id')
         .inTable('projects')

      tbl.boolean('completed').notNullable().defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('actions')
};
