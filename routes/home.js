var express = require('express');
var router = express.Router();

exports.home = router.get('/', function(req, res) {
    res.render('index', {title: 'Home'});
});

