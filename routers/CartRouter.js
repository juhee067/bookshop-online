const router = require('express').Router();
const {
  addCart,
  getCart,
  deleteCart,
} = require('../controllers/CartController');

router.post('/add', addCart);
router.get('/:cartId', getCart);
router.delete('/:cartId', deleteCart);

module.exports = router;
