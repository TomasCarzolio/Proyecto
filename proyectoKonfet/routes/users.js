const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController')

router.get('/profile', controller.profile);

router.get('/profile/edit', controller.profileEdit);

module.exports = router;
