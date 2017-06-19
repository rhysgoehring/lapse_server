'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users' , (table) => {
    table.increments();
    table.string('username', 255).unique().notNullable();
    table.text('email').notNullable();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.integer('zip').notNullable();
    table.string('profile_pic').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png')
  });

};
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};