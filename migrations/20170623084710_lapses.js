'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('lapses', (table) => {
    table.increments().primary();
    table.string('name', 255).notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE');
    table.string('username').references('username').inTable('users').notNullable().onDelete('CASCADE');
    table.string('location', 255).defaultTo('No location provided');
    table.string('description', 255).defaultTo('No description provided');
    table.string('date', 20).defaultTo('No date provided');
    table.string('duration', 255).defaultTo('Duration not specified');
    table.integer('votes').defaultTo(0);
    table.string('playlist_url');
    table.string('url1');
    table.string('url2');
    table.string('url3');
    table.string('url4');
    table.string('pic_1_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.string('pic_1_title', 200).defaultTo('No Title Provided');
    table.string('pic_1_desc', 255).defaultTo('No Description Provided');
    table.string('pic_2_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.string('pic_2_title', 200).defaultTo('No Title Provided');
    table.string('pic_2_desc', 255).defaultTo('No Description Provided');
    table.string('pic_3_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.string('pic_3_title', 200).defaultTo('No Title Provided');
    table.string('pic_3_desc', 255).defaultTo('No Description Provided');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lapses')
};