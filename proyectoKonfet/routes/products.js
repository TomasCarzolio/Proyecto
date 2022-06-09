const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')
const multer = require('multer');
const path = require('path')
const upload = multer({ dest: path.join(__dirname,'../public/images/uploads') });

router.get('/add', controller.productAdd);
router.post('/add', upload.single('fotoDePerfil'), controller.store);

router.get('/:producto', controller.product);


module.exports = router;