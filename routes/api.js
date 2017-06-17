'use strict';

const index = require('./index');
const users = require('./users');
const express = require('express');
const router = express.Router();

router.use('/', index);
router.use('/users', users);

module.exports = router;