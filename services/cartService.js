const db = require('../models');
const Cart = db.Cart;

const cartService = {
  addItem: async (cart) => {
    return await Cart.create(cart);
  },
  getItem: async (cart) => {
    return await Cart.findOne({ where: { id: cart } });
  },
  deleteItem: async (cart) => {
    return await Cart.destroy({ where: { id: cart } });
  },
};

module.exports = cartService;
