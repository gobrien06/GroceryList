var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/store', function(req, res, next) {
    list.storeList(res, req);
});

module.exports = router;
