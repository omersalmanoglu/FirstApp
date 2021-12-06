var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("search user id:" + req.body.id)

  
});

module.exports = router;