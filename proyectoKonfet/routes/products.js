const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')
var multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

router.get('/add', controller.productAdd);
router.post('/add', upload.single('cover'), controller.store);

router.get('/:product', controller.product);


module.exports = router;