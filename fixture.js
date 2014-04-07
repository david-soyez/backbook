var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/backbook');

require('./models/book.js');
require('./models/category.js');

var fixtures = require('pow-mongoose-fixtures');

// load categories fixtures
fixtures.load(__dirname + '/fixtures/categories.js',mongoose, function(err) {
    console.log(err||'done');
});

// load books fixtures
fixtures.load(__dirname + '/fixtures/books.js',mongoose, function(err) {
    console.log(err||'done');
});