'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users' , (table) => {
    table.increments();
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
    table.text('email').unique().notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.integer('zip').notNullable();
    table.string('profile_pic').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png')
  });

};
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};