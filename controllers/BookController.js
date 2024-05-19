const { allBooks, getBookById } = require('../services/bookService');
const { StatusCodes } = require('http-status-codes');

const getAllBooks = async (req, res) => {
  try {
    const books = await allBooks();

    if (books.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: '404', message: '도서가 존재하지않습니다.' });
    }
    return res.status(StatusCodes.OK).json({ status: 200, books });
  } catch (err) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '도서 전체 조회 중에 오류가 발생했습니다.' });
  }
};

const getFilterBooks = async (req, res) => {
  try {
    const books = await getBookById(req);

    if (books.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: '404', message: '도서가 존재하지않습니다.' });
    }
    return res.status(StatusCodes.OK).json({ status: 200, books });
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.BAD_REQUEST).json({ message: '도서 조회 중에 오류가 발생했습니다.' });
  }
};

module.exports = { getAllBooks, getFilterBooks };