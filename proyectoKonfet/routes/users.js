var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/headerLogueado', function(req, res, next) {
  res.render('home', { title: 'Página usuario'});
});

module.exports = router;
