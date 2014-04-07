
/**
 * Module dependencies.
 */

var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');
var api = require('./routes/api');
var http = require('http');
var path = require('path');

var app = express();
mongoose.connect('mongodb://localhost/backbook');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/api/books', api.book.all);
app.get('/api/books/:title', api.book.one);
app.post('/api/books', api.book.create);

app.get('/api/categories', api.category.all);
app.post('/api/categories', api.category.create);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
