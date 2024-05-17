const userController = require('../controllers/userController.js');
const router = require('express').Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/reset-password/request', userController.reqResetPassword);
router.post('/reset-password', userController.resetPassword);
router.get('/profile', userController.getUserInfo).put('/profile', userController.updateUserInfo);

router.delete('/account', userController.deleteUserAccount);

module.exports = router;
