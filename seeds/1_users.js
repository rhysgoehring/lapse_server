exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
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
    },
    {
    username: 'boulderBro',
    email: 'boulderDude@gmail.com',
    hashed_password: '$2a$12$YbS5MlJIsaRiYs2Qt8cxeOgAwyLpbT2qnwgNRQLv0Hvx6wb9mxQaC',
    profile_pic:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkIGwbpZz5dGk777HBc_53CZgeyjNbcnoF55dM8Rrwj9Dmk0UkQ'
    }
    ]);
    }).then(() => {
      return knex.raw("select setval('users_id_seq', (select max(id) from users));")
    });
};