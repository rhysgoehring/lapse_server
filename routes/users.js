const express = require('express');
const router = express.Router();
const app = express();
const knex = require('../knex');
const humps = require('humps');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')

require('dotenv').config();

router.get('/', function(req, res) {
  res.send('you\'re in users').end();

});

router.post('/signup', function(req, res) {
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
      // res.cookie('token', token, null);
      // res.cookie('loggedIn', true)
      res.send({token: token, currentUser: user[0]});
      // res.send(user[0]);
    })
 
});

router.get('/signin', (req, res, next) => {
  res.status(200).send('Route to Sign In Working')
})

router.post('/signin', function(req, res) {
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
            res.send({token: token, currentUser: userQuery});
          } else {
            res.send({message: 'Incorrect Password'})
          }
        })
      }
    })
  
});


module.exports = router;