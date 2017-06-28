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
          url3: "https://cdn.flowplayer.org/391106/456979.mp4",
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
      },
      {
        name: 'June All-Day Lapse',
        user_id: 1,
        location: 'Boulder, CO',
        description: 'Another all day lapse this one taken in June. The Pi took 1,622 pictures every thirty seconds starting in the morning and caught some cool cloud movement in the afternoon.',
        date: '6/15/2017',
        duration: 'Over 12 hours condensed into a 1 minute video',
        votes: 0,
        playlist_url: "https://cdn.flowplayer.org/391106/457871.m3u8",
        url1: "https://cdn.flowplayer.org/391106/457871-1080p.mp4",
        url2: "https://cdn.flowplayer.org/391106/457871-720p.mp4",
        url3: "https://cdn.flowplayer.org/391106/457871.mp4",
        url4: "https://cdn.flowplayer.org/391106/457871-216p.mp4",
        pic_1_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/6-15_8_am0000.jpg",
        pic_1_title: "First Picture of the Day",
        pic_1_desc: "The first picture of the time lapse, taken around 8:00 in the morning",
        pic_2_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/6-15_8_am0749.jpg",
        pic_2_title: "Clouds Coming In",
        pic_2_desc: "This was the 749th picture taken during the time lapse at around 3:30 PM",
        pic_3_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/6-15_8_am1446.jpg",
        pic_3_title: "Afternoon Clouds",
        pic_3_desc: "This was the 1446th picture in the time lapse taken just before 8PM"
    },
    {
      name: 'Evening Lapse in May',
      user_id: 1,
      location: 'Boulder, CO',
      description: 'I started this lapse later in the day at around 4:30 PM, the Pi took a picture every 30 seconds for around 5 hours for a total of 588 pictures. I decided for shorter lapses to take pictures every 15 seconds after this.',
      date: '5/20/2017',
      duration: 'About 5 hours condensed 30 seconds',
      votes: 0,
      playlist_url: "https://cdn.flowplayer.org/391106/457906.m3u8",
      url1: "https://cdn.flowplayer.org/391106/457906-1080p.mp4",
      url2: "https://cdn.flowplayer.org/391106/457906-720p.mp4",
      url3: "https://cdn.flowplayer.org/391106/457906.mp4",
      url4: "https://cdn.flowplayer.org/391106/457906-216p.mp4",
      pic_1_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may204pm0000.jpg",
      pic_1_title: "First Picture of the day",
      pic_1_desc: "Picture taken at around 4:30 PM",
      pic_2_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may204pm0375.jpg",
      pic_2_title: "Clouds and Color Coming In",
      pic_2_desc: "This was the 375th picture taken showing the drastic change in cloud coverage.",
      pic_3_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may204pm0564.jpg",
      pic_3_title: "Nightfall",
      pic_3_desc: "One of the last pictures in the sequence, captures the clouds moving over the mountains before it get's dark."
  }
    ]);
    }).then(() => {
      return knex.raw("select setval('lapses_id_seq', (select max(id) from lapses));")
    });
};