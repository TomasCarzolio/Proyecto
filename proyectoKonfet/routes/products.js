var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController')

router.get('/add', productController.productAdd);

router.get('/:product', productController.product);

module.exports = router;