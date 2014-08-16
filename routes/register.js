var express = require('express');
var router = express.Router();

exports.register = router.get('/', function(req, res) {
    res.render('register', {title: 'Register'});
});
