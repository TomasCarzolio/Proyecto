var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')

router.get('/add', controller.productAdd);

router.get('/:product', controller.product);

module.exports = router;