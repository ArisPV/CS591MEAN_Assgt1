var express = require('express');
var router = express.Router();

/* GET ps3 page. */
router.get('/', function(req, res, next) {
  res.render("ps3", {message: "Hey now"});
});

router.post('/c', function(req, res) {
    res.render("ps3", {message: "Hey now", length: 7})
});

module.exports = router;
