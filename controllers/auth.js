// const jwt = 'jsonwebtoken';
// const knex = '../knex';
// const bcrypt = 'bcryptjs';
//
// require('dotenv').config();
// 
// exports.signin = function(req, res, next) {
//   const email = req.body.email;
//   const password = req.body.password;
//   const first_name = req.body.first_name;
//   const last_name = req.body.last_name;
//   const zip = req.body.zip;
//   const profilePic = req.body.profile_pic
//
//   knex('users').where('email', email).then((data) => {
//     if (data.length > 0) {
//       bcrypt.compare(password, data[0].hashed_password, (err, boolean) => {
//         if (boolean) {
//           let token = jwt.sign({
//             email: data[0].email,
//             password: data[0].hashed_password,
//             zip: data[0].zip
//           }, process.env.secret);
//           res.cookie('token', token, {httpOnly: true});
//           delete data[0].hashed_password;
//
//         }
//       }}
//   })
//
//   const token = jwt.sign(req.body, process.env.secret)res.json({
//     token: jwt.sign(req.body, process.env.secret)
//   });}
//
// exports.signup = function(req, res, next) {
//   const email = req.body.email;
//   const password = req.body.password;
//   const firstName = req.body.first_name;
//   const lastName = req.body.last_name;
//   const zip = req.body.zip;
//   const profilePic = req.body.profile_pic
//   const saltrounds = 10
//
//   if (!email || !password) {
//     return res.status(422).send({error: 'You must provide email and password'});
//   }
//
//   knex('users').where('email', email).then((seatsTaken) => {
//     if (seatsTaken > 0) {
//       return res.status(422).send({error: 'Email is in use'})
//     } else {
//       knex('users').returning([
//         'id',
//         'first_name',
//         'last_name',
//         'email',
//         'zip',
//         'profile_pic',
//         'hashed_password'
//       ]).insert({
//         email: email,
//         first_name: firstName,
//         last_name: lastName,
//         zip: zip,
//         profile_pic: profilePic hashed_password: bcrypt.hashSync(password, saltRounds)).then((user) => {
//           let token = jwt.sign({
//             email: user[0].email,
//             password: user[0].password
//           }, secret)
//         })})
//     }})
//
// }
