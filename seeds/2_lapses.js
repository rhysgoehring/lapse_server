exports.seed = function(knex) {
  return knex('lapses').del()
    .then(function() {
      // Inserts seed entries
      return knex('lapses').insert([
        {
          name: 'An April Day in Boulder',
          user_id: 1,
          username: 'rhysgoehring',
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
        username: 'rhysgoehring',
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
      username: 'rhysgoehring',
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
  },
  {
    name: 'My First Time Lapse',
    user_id: 2,
    username:'donaldtrump',
    location: 'Boulder, CO',
    description: 'This was my first and best time lapse so far, I took it a day after rhysgoehring took his in May. I broke into his apartment and my tech guy used some sort of Pie to make this so don\'t blame ME for the quality.',
    date: 'May 21st',
    duration: 'I haven\'t watched it yet, someone said around 15 seconds.',
    votes: 0,
    playlist_url: "https://cdn.flowplayer.org/391106/468379.m3u8",
    url1: "https://cdn.flowplayer.org/391106/468379-1080p.mp4",
    url2: "https://cdn.flowplayer.org/391106/468379-720p.mp4",
    url3: "https://cdn.flowplayer.org/391106/468379.mp4",
    url4: "https://cdn.flowplayer.org/391106/468379-216p.mp4",
    pic_1_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may214pm0000.jpg",
    pic_1_title: "First picture it took",
    pic_1_desc: "This picture's amazing. It will make the cover of National Geographic.",
    pic_2_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may214pm0288.jpg",
    pic_2_title: "Amazinger Picture",
    pic_2_desc: "Wow. They keep getting better. This was the best picture we took, I don't even like the others.",
    pic_3_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/may214pm0381.jpg",
    pic_3_title: "The End",
    pic_3_desc: "Or as my Italian friends say: \'The Fin\'."
  },
  {
    name: 'Brohemian rhapsody',
    user_id: 3,
    username: 'boulderBro',
    location: 'Boulder, where else?',
    description: 'So like, I\'ve always been super into photography since I was like 22 and a half. I made this dope video on some guys balcony when he wasn\'t home which was super righteous.',
    date: 'June 12th',
    duration: 'The whole day in 45 seconds, crazy!',
    votes: 0,
    playlist_url: "https://cdn.flowplayer.org/391106/472387.m3u8",
    url1: "https://cdn.flowplayer.org/391106/472387-1080p.mp4",
    url2: "https://cdn.flowplayer.org/391106/472387-720p.mp4",
    url3: "https://cdn.flowplayer.org/391106/472387.mp4",
    url4: "https://cdn.flowplayer.org/391106/472387-216p.mp4",
    pic_1_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/5-5_11_am0000.jpg",
    pic_1_title: "Pictero Uno, Bro",
    pic_1_desc: "Have you ever been so stoked to watch a video when this is first picture of it you see?",
    pic_2_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/5-5_11_am0402.jpg",
    pic_2_title: "WHOA!",
    pic_2_desc: "This picture reminds me of this band I like, their name is Explosions in the Sky. You\'d have to hear them to get it.",
    pic_3_url: "https://s3-us-west-2.amazonaws.com/rhyslapse/Images/5-5_11_am0765.jpg",
    pic_3_title: "Super-Chill",
    pic_3_desc: "This picture really mellows me out. I like to think about it when I\'m stressed out at work, it takes me to a different place. Normally it/'s the dude whose balcony I used to take this."
   }
    ]);
    }).then(() => {
      return knex.raw("select setval('lapses_id_seq', (select max(id) from lapses));")
    });
};