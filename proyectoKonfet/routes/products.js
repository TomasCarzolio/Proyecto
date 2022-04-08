var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController')

/* GET users listing. */
router.get('/:product', productController.product);

router.get('/productAdd', productController.productAdd);

module.exports = router;