
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    var qModule = req.query.module
    
    res.send(req.body)
});

module.exports = router;