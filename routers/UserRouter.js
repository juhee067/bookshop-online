const userController = require('../controllers/userController.js');
const router = require('express').Router();

router.post('/signup', userController.addUser);
module.exports = router;
