const {
  signup,
  signin,
  reqResetPassword,
  resetPassword,
  getUserInfo,
  updateUserInfo,
  deleteUserAccount,
} = require('../controllers/UserController.js');
const router = require('express').Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/reset-password/request', reqResetPassword);
router.post('/reset-password', resetPassword);
router.get('/profile', getUserInfo).put('/profile', updateUserInfo);

router.delete('/account', deleteUserAccount);

module.exports = router;
