const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')
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

router.get('/me', controller.myProfile);

router.get('/profile/edit', controller.profileEdit);

router.post('/profile/update', upload.single('fotoDePerfil'), controller.profileUpdate);

router.get('/:profile', controller.profile);

module.exports = router;
