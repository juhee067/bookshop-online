const userController = require('../controllers/userController.js');
const router = require('express').Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
module.exports = router;
