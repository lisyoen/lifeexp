var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin', {
    title: '인생경험치 관리자 페이지',
    count: 5
  });
});

module.exports = router;
