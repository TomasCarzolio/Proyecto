const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')

router.get('/add', controller.productAdd);

router.get('/:product', controller.product);

module.exports = router;