'use strict';


const express = require('express');
const router = express.Router();
const index = require('./index');
const users = require('./users');


router.use('/', index);
router.use('/users', users);

module.exports = router;