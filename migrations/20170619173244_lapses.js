'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('lapses', (table) => {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE');
    table.string('location', 255);
    table.string('description', 255);
    table.string('date', 20);
    table.string('duration', 25);
    table.string('lapse_url').notNullable().defaultTo('https://s3-us-west-2.amazonaws.com/rhyslapse/Videos/june14-xvidmpeg40001-1223.avi');
    table.string('pic_1_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.string('pic_2_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.string('pic_3_url').defaultTo('https://upload.wikimedia.org/wikipedia/commons/3/3e/Image_needed_LHB.png');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('lapses')
};