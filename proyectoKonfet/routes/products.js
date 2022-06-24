const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController')
const multer = require('multer');
const path = require('path')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
    
    });
    
const upload = multer({storage : storage})
    

router.get('/add', controller.productAdd);

router.post('/add', upload.single('entrada'), controller.store);

router.get('/:producto', controller.product);

router.get('/:id/edit', controller.edit);

router.post('/:id/edit', upload.single('entrada'), controller.update);

router.get('/:id/delete', controller.delete);

router.post('/:id/comment', controller.comment);

module.exports = router;