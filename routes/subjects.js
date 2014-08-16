var express = require('express');
var router = express.Router();

exports.subjects = router.get('/', function(req, res) {
    res.send('List of subjects that the staff is taking!');
});
