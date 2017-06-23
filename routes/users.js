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
  let username = req.body.username.toLowerCase();
  let email = req.body.email;
  let password  = req.body.password;
  
  

  if (!newUser.password || !newUser.username ) {
    res.status(422).send({error: 'You must provide a username, password, and your email address'});
  } else {
    knex('users').where('username', username).then((seatsTaken) => {
      if (seatsTaken.length > 0) {
        return res.status(422).send({error: 'Username is in use'})
      }
        knex('users').returning('*')
          .insert({
            username: username,
            hashed_password: bcrypt.hashSync(password, 8),
            email: email
          }).then((user) => {
            let token = jwt.sign({userID: user[0].id, username: user[0].username, password: user[0].hashed_password, email: user[0].email}, process.env.token)
            res.json({token: token})
          })
      
    })
  }


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