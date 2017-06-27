exports.seed = function(knex) {
  return knex('lapses').del()
    .then(function() {
      // Inserts seed entries
      return knex('lapses').insert([
        {
          name: 'An April Day in Boulder',
          user_id: 1,
          location: 'Boulder, CO',
          description: 'One of my first all day time lapses with my Raspberry Pi Zero W. The Pi took a picture every 30 seconds and 1,474 pictures total.',
          date: '4/25/2017',
          duration: 'Over 12 hours condensed into a 1 minute video',
          votes: 0,
          playlist_url: "https://cdn.flowplayer.org/391106/456979.m3u8",
          url1: "https://cdn.flowplayer.org/391106/456979-1080p.mp4",
          url2: "https://cdn.flowplayer.org/391106/456979-720p.mp4",
          url3: "https://https://cdn.flowplayer.org/391106/456979.mp4",
          url4: "https://cdn.flowplayer.org/391106/456979-216p.mp4",
          pic_1_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/4-25000000000.jpg",
          pic_1_title: "First Picture of the Day",
          pic_1_desc: "The first picture of the time lapse, taken at 8:00 AM MDT",
          pic_2_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/4-25000000946.jpg",
          pic_2_title: "Middle of the Day",
          pic_2_desc: "This was the 946th picture taken during the time lapse at around 4:00 PM",
          pic_3_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/4-25000001440.jpg",
          pic_3_title: "End of the Day",
          pic_3_desc: "This was the 1440th picture in the time lapse taken just before 8PM"
      }
    ]);
    }).then(() => {
      return knex.raw("select setval('lapses_id_seq', (select max(id) from lapses));")
    });
};