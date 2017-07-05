exports.seed = function(knex) {
  return knex('comments').del()
    .then(function() {
      return knex('comments').insert([
        {
        commenter: 'rhysgoehring',
        lapse_id: 1,
        body: 'Is anyone else ever going to join this site and comment on this?'
        },
        {
        commenter: 'donaldtrump',
        lapse_id: 1,
        body: 'I\'m looking for the twitter, where is he?'
        },
        {
        commenter: 'boulderBro',
        lapse_id: 1,
        body: 'Dude, I think this is Instagram. Still trying to figure it out. What\'s up Mr. President?! We have the same barber, bro.'
        }
    ]);
    }).then(() => {
      return knex.raw("select setval('comments_id_seq', (select max(id) from comments));")
    });
};