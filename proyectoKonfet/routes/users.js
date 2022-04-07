var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.get('/profile', userController.profile);

router.get('/profile/edit', userController.profileEdit);

router.get('/', userController.profile);

module.exports = router;
