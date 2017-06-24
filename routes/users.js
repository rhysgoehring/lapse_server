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
  let newUser = req.body;
  let username = newUser.username.toLowerCase();
  let email = newUser.email;
  let password = newUser.password;
  const salt = bcrypt.genSaltSync(10)
  
  

  if (!password || !username ) {
    return res.status(422).send({error: 'You must provide a username, password, and your email address'});
  }

    knex('users').returning('*')
      .insert({
        username: username,
        email: email,
        hashed_password: bcrypt.hashSync(password, salt)
      }).then((user) => {
      delete password;
      let token = jwt.sign(user[0], process.env.token)
      console.log('###USER[0] is: ', user[0])
      console.log('@@@@@TOKEN IS:', token);
      res.cookie('token', token, {httpOnly: true});
      // res.cookie('loggedIn', true)
      res.json({token: token, user: user[0]});
      // res.send(user[0]);
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
        
        bcrypt.compare(authUser.password, userQuery.hashed_password, (err, result) => {
          if (result) {
            delete authUser.password
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