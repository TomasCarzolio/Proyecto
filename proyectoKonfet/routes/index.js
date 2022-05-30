const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);

router.get('/login', controller.login);

router.post('/login', controller.access);

router.get('/logout', controller.logout);

router.get('/register', controller.register);

router.post('/register', controller.store);

router.get('/searchResults', controller.searchResults);

module.exports = router;
