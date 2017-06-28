exports.seed = function(knex) {
  return knex('users_lapses').del()
    .then(function() {
      // Inserts seed entries
      return knex('users_lapses').insert([
        {
        id: 1,
        user_id: 1,
        lapse_id: 1
      },
      {
      id: 2,
      user_id: 1,
      lapse_id: 2
    },
    {
    id: 3,
    user_id: 1,
    lapse_id: 3
  }
    ]);
    }).then(() => {
      return knex.raw("select setval('users_lapses_id_seq', (select max(id) from users_lapses));")
    });
};