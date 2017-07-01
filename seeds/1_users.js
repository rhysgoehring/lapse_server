exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
        username: 'rhysgoehring',
        email: 'rhysgoehring@gmail.com',
        hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
        profile_pic:  'http://i.imgur.com/gh1E6Lu.jpg'
      },
      {
      username: 'donaldtrump',
      email: 'trump@gmail.com',
      hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
      profile_pic:  'https://s3-us-west-2.amazonaws.com/rhyslapse/Images/trump.jpg'
      }
    ]);
    }).then(() => {
      return knex.raw("select setval('users_id_seq', (select max(id) from users));")
    });
};