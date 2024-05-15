const userController = require('../controllers/userController.js');

const router = require('express').Router();

router.post('/users/signup', userController.addUser);
module.exports = router;
