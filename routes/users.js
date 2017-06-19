const express = require('express');
const router = express.Router();
const app = express();
const knex = require('../knex');
const humps = require('humps');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.get('/', function(req, res, next) {
  res.send('you\'re in users').end();

});

router.post('/', function(req, res, next) {
  const newUser = req.body;
  
  const saltRounds = 10;

  

  if (!newUser.email || !newUser.password || !newUser.username || !newUser.zip) {
    return res.send('You must provide an email, password, username and your zip code');
  }

  bcrypt.hash(newUser.password, saltRounds).then((hash) => {
    newUser.hashed_password = hash;
    delete newUser.password;
    console.log('newUser', newUser, 'hashed_password:', newUser.hashed_password);

    knex('users').returning('*').insert(newUser).then((user) => {
      delete user[0].hashed_password
      let token = jwt.sign(user[0], process.env.token)
      console.log('###USER[0] is: ', user[0])
      console.log('@@@@@TOKEN IS:', token);
      res.cookie('token', token, {httpOnly: true});
      res.cookie('loggedIn', true)
   
      res.send(user[0]);
      
    })

  })


});
module.exports = router;