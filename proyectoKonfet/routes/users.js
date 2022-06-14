const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')
const multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

router.get('/me', controller.myProfile);

router.get('/profile/edit', controller.profileEdit);

router.post('/profile/update', upload.single('fotoDePerfil'), controller.profileUpdate);

router.get('/:profile', controller.profile);

module.exports = router;
