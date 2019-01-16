const db = require("../models");

// define methods for saving to, getting from and deleting articles in the DB

module.exports = {
  //retrieve the saved articles from the db (put newest first)
  findAll: function (req, res) {
    // console.log(req.body);
    console.log('getting saved articles from db');
    db.Article
    .find({})
    .sort({ date: -1 })
    .then(doc => res.json(doc))
    .catch(err => res.status(422).json(err));
  },
  //save article info to the db
  create: function (req, res) {
    // console.log(req.body)
    console.log('saving article to db');
    db.Article
    .create(req.body)
    .then(doc => res.json(doc))
    .catch(err => res.status(422).json(err))
  },
  //delete an article by its ID from the db
  delete: function (req, res) {
    // console.log('article id removed', req.params.id);
    db.Article
    .deleteOne({ _id: req.params.id })
    .then(doc => res.json(doc))
    .catch(err => res.status(422).json(err))
  }
};