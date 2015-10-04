var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/trunkswap');
var trunkdb = db.get('trunks');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Website' });
});

/* route to user index */
router.get('/users', function(req, res, next) {
    res.render('users/index', {title: 'Users'});
});

/* route to trunk index */
router.get('/trunks', function(req, res, next) {
    res.render('trunks/index', {title: 'Trunks'});
});

module.exports = router;
