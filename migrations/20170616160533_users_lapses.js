'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('users_lapses', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.integer('lapse_id').references('id').inTable('lapses').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_lapses')
};
