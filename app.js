var http = require('http');
var express = require('express');
var app = express();

var config = require('./config.json')[app.get('env')];

// App settings
app.set('view engine', 'jade');
app.set('views', './views');

// Load the route handlers
// var routers = require('./routes');
var home = require('./routes/home');
var users = require('./routes/users');
var forum = require('./routes/forum');

// Middleware

// Routes
app.use('/', forum.main);
app.use('/login/', home.login);
app.use('/register/', home.register);
// app.use('/subjects/:sub_code', forum.);
// app.use('/subjects/all', forum.);

http.createServer(app).listen(7777, function() {
    console.log('Server is up!');
});

// module.exports = app;

// Testing
console.log(config.db_host);
console.log(config.db_user);
console.log(config.db_pass);
