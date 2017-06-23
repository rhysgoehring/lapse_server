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

router.post('/signup', function(req, res, next) {
  const newUser = req.body;
  
  const saltRounds = 8;

  if (!newUser.password || !newUser.username ) {
    return res.status(422).send({error: 'You must provide a username, password, and your email address'});
  }

  bcrypt.hash(newUser.password, saltRounds).then((hash) => {
    newUser.hashed_password = hash;
    delete newUser.password;
    

    knex('users').returning('*').insert(newUser).then((user) => {
      delete user[0].hashed_password
      let token = jwt.sign(user[0], process.env.token)
      console.log('###USER[0] is: ', user[0])
      console.log('@@@@@TOKEN IS:', token);
      // res.cookie('token', token, {httpOnly: true});
      // res.cookie('loggedIn', true)
      res.json({token: token, user: user[0]});
      // res.send(user[0]);
    })
  })
});

router.post('/signin', function(req, res, next) {
  const authUser = req.body;
  
  knex('users')
    .where('username', authUser.username)
    .first()
    .then((userQuery) => {
      if (!userQuery) {
        res.send({message: 'Please Sign Up before Logging In'})
      } else {
        console.log('userQuery is:', userQuery, 'authUser is:', authUser);
        bcrypt.compare(authUser.password, userQuery.hashed_password, (err, result) => {
          if (result) {
            let token = jwt.sign(userQuery, process.env.token)
            res.json({token: token, user: userQuery})
          } else {
            res.send({message: 'Incorrect Password'})
          }
        })
      }
    })
  
});


module.exports = router;