const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')
const multer = require('multer');
const path = require('path')
const upload = multer({ dest: path.join(__dirname,'../public/images/uploads') });

router.get('/profile', controller.profile);
router.get('/profile/edit', controller.profileEdit);
router.post('/profile/update', upload.single('cover'), controller.profileUpdate);

module.exports = router;
