var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/trunkswap');
var userdb = db.get('users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'My Website' });
});

router.post('/', function(req, res, next) {
  userdb.insert({ username: req.body.username, password: req.body.password }, function(err, album) {
    userdb.find({}, function (err, records) {
      res.render('users/index', {allUsers: records});
    });
  });
});

module.exports = router;




