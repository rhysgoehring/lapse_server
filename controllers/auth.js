const jwt = require('jwt-simple');
const knex = '../knex';

require('dotenv').config();

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({
    sub: user.id,
    iat: timestamp
  }, process.env.secret);
}

exports.signin = function(req, res, next) {
  res.send({
    token: tokenForUser(req.user)
  });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({error: 'You must provide email and password'});
  }
  
  // See if a user with given email exists
  
  // If user exists return an error
  
  // If user doesn't exist, put them in database
  
  // respond to request indicating the user was created
}
