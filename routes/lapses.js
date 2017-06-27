

const express = require('express');
const router = express.Router();
// const app = express();
const humps = require('humps');
const knex = require('../knex.js');

router.get('/', (req, res, next) => {
  knex('lapses').returning('*').then((lapses) => res.json(lapses))
  .catch((err) => next(err));
});

module.exports = router;