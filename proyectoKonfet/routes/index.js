const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')
const multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

/* GET home page. */
router.get('/', controller.index);

router.get('/login', controller.login);

router.post('/login', controller.access);

router.get('/logout', controller.logout);

router.get('/register', controller.register);

router.post('/register',upload.single('fotoDePerfil'),  controller.store);

router.get('/searchResults', controller.searchResults);

module.exports = router;
