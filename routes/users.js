const express = require('express');
const router = express.Router();
const app = express();
const knex = require('../knex');
const humps = require('humps');
const bcrypt = require('bcryptjs');
const jwt = ('jsonwebtoken');

require('dotenv').config();

router.get('/', function(req, res, next) {
  console.log(req.body)
  res.sendStatus(200)

});

router.post('/', function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const zip = req.body.zip;
  const profilePic = req.body.profile_pic
  const saltrounds = 10

  const token = jwt.sign({
    email: user[0].email,
    password: user[0].password
  }, process.env.secret)

  if (!email || !password) {
    return res.statusCode(422).body({error: 'You must provide email and password'});
  }

  knex('users').where('email', email).then((seatsTaken) => {
    if (seatsTaken > 0) {
      return res.statusCode(422)
    } else {
      knex('users').returning([
        'id',
        'first_name',
        'last_name',
        'email',
        'zip',
        'profile_pic',
        'hashed_password'
      ]).insert({
        email: email,
        first_name: firstName,
        last_name: lastName,
        zip: zip,
        profile_pic: profilePic,
        hashed_password: bcrypt.hashSync(password, saltRounds)
      }).then((user) => {
        res.cookie('token', token, {httpOnly: true});
        console.log('@@@@@TOKEN IS:', token)
        console.log('#####DATA[0] is ', data[0]);
      })
    }
 })
 });
 module.exports = router;