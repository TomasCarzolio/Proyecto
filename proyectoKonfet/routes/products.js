var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController')

/* GET users listing. */
router.get('/:product', productController.product);

router.get('/add', productController.productAdd);

module.exports = router;