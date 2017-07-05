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
      },
      {
      id: 4,
      user_id: 2,
      lapse_id: 4
      },
      {
      id: 5,
      user_id: 3,
      lapse_id: 5
      }
    ]);
    }).then(() => {
      return knex.raw("select setval('users_lapses_id_seq', (select max(id) from users_lapses));")
    });
};