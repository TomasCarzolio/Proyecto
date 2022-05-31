const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/profile', controller.profile);
router.get('/profile/edit', controller.profileEdit);
router.post('/profile/update', upload.single('cover'), controller.profileUpdate);

module.exports = router;
