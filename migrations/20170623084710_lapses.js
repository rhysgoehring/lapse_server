'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('lapses', (table) => {
    table.increments().primary();
    table.string('name', 255).notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE');
    table.string('location', 255).defaultTo('No location provided');
    table.string('description', 255).defaultTo('No description provided');
    table.string('date', 20).defaultTo('No date provided');
    table.string('duration', 25).defaultTo('Duration not specified')
    table.string('lapse_url').notNullable().defaultTo('https://s3-us-west-2.amazonaws.com/rhyslapse/Videos/june14-xvidmpeg40001-1223.avi');
    table.string('pic_1_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.string('pic_1_title', 20).defaultTo('No Title Provided');
    table.string('pic_1_desc', 255).defaultTo('No Description Provided');
    table.string('pic_2_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.string('pic_2_title', 20).defaultTo('No Title Provided');
    table.string('pic_2_desc', 255).defaultTo('No Description Provided');
    table.string('pic_3_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.string('pic_3_title', 20).defaultTo('No Title Provided');
    table.string('pic_3_desc', 255).defaultTo('No Description Provided');
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lapses')
};