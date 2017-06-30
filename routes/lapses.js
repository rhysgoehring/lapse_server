
const express = require('express');
const router = express.Router();
const knex = require('../knex.js');

router.get('/', (req, res, next) => {
  knex('lapses').returning('*').then((lapses) => res.json(lapses))
  .catch((err) => next(err));
});

router.get('/comments', (req ,res ,next) => {
  knex('comments').returning('*').then((comments)=> res.json(comments))
  .catch((err) => next(err));
});

router.get('/comments/:id', (req ,res ,next) => {
  console.log('in comments:id')
  const id = req.params.id
  return knex('comments')
    .select('*')
    .where('lapse_id', id)
    .first()
    .then((comments) => res.json(comments))
    .catch((err) => next(err));
});



module.exports = router;