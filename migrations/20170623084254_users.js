'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users' , (table) => {
    table.increments().primary();
    table.string('username', 255).unique().notNullable();
    table.text('email').notNullable();
    table.specificType('hashed_password', 'char(200)').notNullable();
    table.string('profile_pic').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
    
  });

};
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};