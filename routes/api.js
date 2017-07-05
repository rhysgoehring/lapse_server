'use strict';

const cors = require('cors');
const express = require('express');
const router = express.Router();
const index = require('./index');
const users = require('./users');
const lapses = require('./lapses');

app.use(cors());
app.options('*', cors());

router.use('/', index);
router.use('/users', users);
router.use('/lapses', lapses);


module.exports = router;