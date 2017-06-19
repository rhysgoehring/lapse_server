exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          username: 'rhysgoehring',
          email: 'rhysgoehring@gmail.com',
          hashed_password:'$2a$10$1TqtrM2gmNM.TGUaZR50Ze.kKLg.OGGUBLhjj3JGckki5f50gQjoe',
          zip: 80301,
          profile_pic: 'http://i.imgur.com/gh1E6Lu.jpg'
      
        },
      ]);
    })
    .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
      })
};
