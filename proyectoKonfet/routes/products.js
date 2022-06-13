const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')
const multer = require('multer');
const path = require('path')
const upload = multer({ dest: path.join(__dirname,'../public/images/uploads') });

router.get('/add', controller.productAdd);
router.post('/add', upload.single('foto'), controller.store);

router.get('/:producto', controller.product);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', upload.single('foto'), controller.update);


module.exports = router;