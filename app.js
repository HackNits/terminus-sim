var http = require('http');
var express = require('express');
var app = express();

var config = require('./config.json')[app.get('env')];

// App settings
app.set('view engine', 'jade');
app.set('views', './views');

// MySQL
/*
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: config.db_host,
        user: config.db_user,
        password: config.db_pass,
        database: config.db
    });
*/
// Load the route handlers
// var routers = require('./routes');
var home = require('./routes/home');
var login = require('./routes/login');
var register = require('./routes/register');
var subjects = require('./routes/subjects');
var subject = require('./routes/subject');

// Middleware

// Routes
app.use('/', home.home);
app.use('/login/', login.login);
app.use('/register/', register.register);
app.use('/subjects/', subjects.subjects);
app.use('/subjects/:code/', subject.subject);
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
console.log(config.db);
