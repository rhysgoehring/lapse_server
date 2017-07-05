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
        },
        {
        commenter: 'rhysgoehring',
        lapse_id: 4,
        body: 'Hmm... That looks awefully familiar. Where exactly did you take this?'
        },
        {
        commenter: 'boulderBro',
        lapse_id: 4,
        body: 'Try taking a video longer than like 10 seconds bro this isn\'t Snapchat... Is it?'
        },
        {
        commenter: 'donaldtrump',
        lapse_id: 4,
        body: 'rhysgoehring, I know what you\'re thinking, I always do. I did not break into your apartment to take this. I am a man of the law, no one likes the law more than me, no one.'
        },
        {
        commenter: 'rhysgoehring',
        lapse_id: 5,
        body: 'Please just stop breaking into my apartment, there\'s info on this site about how you can make your own time lapses without breaking in to my place.'
        },
        {
        commenter: 'donaldtrump',
        lapse_id: 5,
        body: 'I agree rhysgoehring, that is a tasteless move. Shame on you BoulderBro, you were never my friend.'
        },
        {
        commenter: 'boulderBro',
        lapse_id: 5,
        body: 'Dude. Donald. You were with me when I did it, bro. Remember, right after we got our haircuts?'
        }
    ]);
    }).then(() => {
      return knex.raw("select setval('comments_id_seq', (select max(id) from comments));")
    });
};