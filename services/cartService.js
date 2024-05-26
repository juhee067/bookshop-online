const db = require('../models');
const Cart = db.Cart;

const cartService = {
  addItem: async (cart) => {
    return await Cart.create(cart);
  },
  getItem: async () => {},
  deleteItem: async () => {},
};

module.exports = cartService;
