var express = require('express');
var router = express.Router();

exports.main = router.get('/', function(req, res) {
    res.send('The main forum page for students and staff!');
});
