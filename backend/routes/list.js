var express = require('express');
var router = express.Router();
var db = require('../database/psqldatabase');

router.post('/store', function(req, res) {
    console.log("items: " + JSON.stringify(req.body));
    res.send(req.body);
    db.insert(req.body.listItem);
});

module.exports = router;
