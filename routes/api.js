'use strict';


const express = require('express');
const router = express.Router();
const index = require('./index');
const users = require('./users');
const lapses = require('./lapses');

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin": "*");

});
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin": "*");

});

router.use('/', index);
router.use('/users', users);
router.use('/lapses', lapses);


module.exports = router;