exports.seed = function(knex) {
  return knex('comments').del()
    .then(function() {
      return knex('comments').insert([
        {
        commenter: 'rhysgoehring',
        lapse_id: 1,
        body: 'Is anyone else ever going to join this site and comment on this?'
      }
    ]);
    }).then(() => {
      return knex.raw("select setval('comments_id_seq', (select max(id) from comments));")
    });
};