var express = require('express');
var router = express.Router();
var controller = require('../controllers/productController')

/* GET users listing. */
router.get('/:product', controller.product);

router.get('/productAdd', controller.productAdd);

module.exports = router;