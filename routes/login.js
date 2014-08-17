var express = require('express');
var router = express.Router();

exports.login = router.get('/', function(req, res) {
    res.render('login', {title: 'Login'});
});

/*
exports.login = router.post('/', function(req, res) {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    });
});
*/
