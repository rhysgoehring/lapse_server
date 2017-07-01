
const express = require('express');
const router = express.Router();
const knex = require('../knex.js');

router.get('/', (req, res, next) => {
  knex('lapses').returning('*').then((lapses) => res.json(lapses))
  .catch((err) => next(err));
});

router.get('/:id', (req, res, next) => {
  console.log('here');
  const id = req.params.id;
  return knex('lapses')
  .select('*')
  .where('id', id)
  .first()
  .then((lapse)=> res.json(lapse))
  .catch((err)=> next(err));
});

router.get('/comments', (req ,res ,next) => {
  knex('comments').returning('*').then((comments)=> res.json(comments))
  .catch((err) => next(err));
});

router.get('/comments/:id', (req ,res ,next) => {
  const id = req.params.id
  console.log('req.params', req.params)
  console.log('id coming to server', id)
  return knex('comments')
    .select('*')
    .where('lapse_id', id)
    .orderBy('created_at', 'asc')
    .then((comments) => {
      
      res.json(comments)
    })
    .catch((err) => next(err));
});

router.post('/comments/:id', (req ,res ,next) => {
  const id = req.params.id;
  const commenter = req.body.commenter;
  const body = req.body.body;
  console.log("adding body:", body, " to lapseId: ", id, "commenter is: ", commenter)
  
  return knex('comments')
  .returning('*')
  .insert({lapse_id: id, commenter: commenter, body: body})
  .then((response) => res.send(response))
  .catch((err)=> next(err));
});


module.exports = router;