var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/trunkswap');
var trunkdb = db.get('trunks');


// route to display all current trunk records from the database
// router.get('/', function(req, res, next) {
//   trunkdb.find({}, function (err, records) {
//     res.render('trunks/index', {allTrunks: records});
//   });
// });


module.exports = router;
