var express = require('express');
var router = express.Router();

exports.subject = router.get('/', function(req, res) {
  res.send('Put for a particular subject!');
});
