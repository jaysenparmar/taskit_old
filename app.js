
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var dashboard = require('./routes/dashboard');
var add = require('./routes/add');
var about = require('./routes/about');
var signup = require('./routes/signup');
var fpass = require('./routes/forgotpassword');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/login', dashboard.login);
app.get('/dashboard.handlebars', dashboard.view);
app.get('/add.handlebars', add.view);
app.get('/about.handlebars', about.view);
app.get('/sign-up.handlebars', signup.view);
app.get('/add', dashboard.addTask);
app.get('/removeTask', dashboard.removeTask);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});