const router = require('express').Router();
const Book = require('./Book.model');

router.get('/', function(req, res, next) {
  Book.find()
    .then(function(books) {
      res.send(books);
    })
    .catch(function(error) {
      next(error);
    });
});

router.post('/', function(req, res, next) {
  Book.create(req.body)
    .then(function() {
      return Book.find();
    })
    .then(function(books) {
      res.send(books);
    })
    .catch(function(error) {
      next(error);
    });
});

module.exports = router;