const { addItem } = require('../services/cartService');
const { StatusCodes } = require('http-status-codes');

const addCart = async (req, res) => {
  try {
    const cart = req.body;
    await addItem(cart);
    res.status(StatusCodes.CREATED).json({ status: 201 });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '장바구니 담기 중에 오류가 발생했습니다.' });
  }
};

const getCart = async (req, res) => {
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
