var Book = require('../models/book.js');

exports.book = {};

exports.book.create = function(req, res) {
    new Book({title: req.body.title, author: req.body.author}).save();
};

exports.book.all = function(req, res) {
    Book.find(function(err, books) {
        res.send(books);
    });
};

exports.book.one = function(req, res) {
    Book.findOne({title: req.params.title}, function(error, book) {
        res.send(book);
    })
};