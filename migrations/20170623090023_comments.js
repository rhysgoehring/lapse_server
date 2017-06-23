'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments().primary();
    table.string('body', 255).notNullable().defaultTo('No body provided for comment');
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE');
    table.integer('lapse_id').references('id').inTable('lapses').notNullable().onDelete('CASCADE');
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
    table.dateTime("updated_at").notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments')
};