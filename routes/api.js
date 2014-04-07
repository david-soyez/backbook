var Book = require('../models/book.js');
var Category = require('../models/category.js');



/* Books API */

exports.book = {};

exports.book.create = function(req, res) {
    new Book(req.body).save();
};

exports.book.all = function(req, res) {

    Book.findAllActive({
        category_id: req.param('category_id'),
        limit: req.param('limit'),
        offset: req.param('offset'),
        sort: req.param('sort'),
        desc: req.param('desc')
    }, function(err, books) {
        res.send(books);
    });

};

exports.book.one = function(req, res) {
    Book.findOne({title: req.params.title}, function(error, book) {
        res.send(book);
    })
};


/* Category API */

exports.category = {};

exports.category.create = function(req, res) {
    new Category(req.body).save();
};

exports.category.all = function(req, res) {
    Category.findAllActive(function(err, categories) {
        res.send(categories);
    });
};