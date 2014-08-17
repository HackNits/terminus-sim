var http = require('http'),
    express = require('express'),
    app = express(),
    config = require('./config.json')[app.get('env')];

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

// Passport
passport.use(new LocalStrategy({
    // Overriding the default arguments
    usernameField: 'reg_no',
    passwordField: 'password',
    passReqToCallback: true
    },
    function(req, reg_no, password, done) {
        var query = 'SELECt * FROM users WHERE' +
                    + '`reg_no` = "' + reg_no + '"';
        connection.query(query, function(err, rows) {
            if(err)
                return done(err);
            if(!rows.length)
                return done(null, false);
            return done(null, rows[0]);
        });
    }
));

// App settings
app.set('view engine', 'jade');
app.set('views', './views');

// MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_pass,
    database: config.db
});
connection.connect(function(err) {
    if(err) throw err;
    console.log('Connection created!');
});

connection.query('SELECT 1', function(err, rows, fields) {
    if(err) {
        throw err;
    }
    console.log(rows);
});

// Load the route handlers
// var routers = require('./routes');
var home = require('./routes/home');
var login = require('./routes/login');
var register = require('./routes/register');
var subjects = require('./routes/subjects');
var subject = require('./routes/subject');

// Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', home.home);
app.use('/login/', login.login);
app.use('/register/', register.register);
app.use('/subjects/', subjects.subjects);
app.use('/subjects/:code/', subject.subject);
// app.use('/subjects/:sub_code', forum.);
// app.use('/subjects/all', forum.);
app.post('/login/', function(req, res){
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    });
});

http.createServer(app).listen(7777, function() {
    console.log('Server is up!');
});

// module.exports = app;

// Testing
console.log(config.db_host);
console.log(config.db_user);
console.log(config.db_pass);
console.log(config.db);

// Close mysql connection
connection.end();
