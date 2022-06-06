const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')
const multer = require('multer');
const upload = multer({ dest: 'public/images/uploads' });

router.get('/profile', controller.profile);
router.get('/profile/edit', controller.profileEdit);
router.post('/profile/update', upload.single('fotoDePerfil'), controller.profileUpdate);

module.exports = router;
