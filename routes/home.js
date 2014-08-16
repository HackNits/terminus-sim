var express = require('express');
var router = express.Router();

/* GET home page. */
exports.home = router.get('/', function(req, res) {
  res.render('index', {title: 'SIM'});
});

exports.login = router.get('/login/', function(req, res) {
    res.render('login', {title: 'Login'});
});

exports.register = router.get('/register/', function(req, res) {
    res.render('register', {title: 'Register'});
});
