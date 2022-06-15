const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')
const multer = require('multer');
const path = require('path')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/images/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
    
    });
    
const upload = multer({storage : storage})
    

/* GET home page. */
router.get('/', controller.index);

router.get('/login', controller.login);

router.post('/login', controller.access);

router.get('/logout', controller.logout);

router.get('/register', controller.register);

router.post('/register',upload.single('fotoDePerfil'),  controller.store);

router.get('/searchResults', controller.searchResults);

module.exports = router;
