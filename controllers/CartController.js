const { addItem, getItem } = require('../services/cartService');
const { StatusCodes } = require('http-status-codes');

const addCart = async (req, res) => {
  try {
    const cart = req.body;
    await addItem(cart);
    res.status(StatusCodes.CREATED).json({ status: 201 });
  } catch (err) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '장바구니 담기 중에 오류가 발생했습니다.' });
  }
};

const getCart = async (req, res) => {
  try {
    let { cartId } = req.params;
    cartId = parseInt(cartId);

    const cart = await getItem(cartId);

    if (!cart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: '장바구니 목록이 없습니다' });
    }
    res.status(StatusCodes.OK).json({ status: 200, cart: cart });
  } catch (err) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '장바구니 조회 중에 오류가 발생했습니다.' });
  }
};

const deleteCart = async (req, res) => {
  try {
    const cart = req.body;
    await addItem(cart);
    res.status(StatusCodes.CREATED).json({ status: 201 });
  } catch (err) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: ' 중에 오류가 발생했습니다.' });
  }
};

module.exports = {
  addCart,
  getCart,
  deleteCart,
};
