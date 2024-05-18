const bookService = require('../services/bookService');
const { StatusCodes } = require('http-status-codes');

const getAllBooks = async (req, res) => {
  try {
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: ' 중에 오류가 발생했습니다.' });
  }
};
const getFilterBooks = async (req, res) => {
  try {
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: ' 중에 오류가 발생했습니다.' });
  }
};

module.exports = { getAllBooks, getFilterBooks };
