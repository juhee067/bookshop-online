const {
  allBooks,
  getBookById,
  getBooksByCategory,
  getNewBooks,
  getPaginatedBooks,
} = require('../services/bookService');
const { StatusCodes } = require('http-status-codes');
const db = require('../models');
const getAllBooks = async (req, res) => {
  const { categoryId, news, limit, currentPage } = req.query;
  console.log(news);
  try {
    let books;

    if (categoryId) {
      books = await getBooksByCategory(categoryId);
    } else if (news) {
      books = await getNewBooks();
    } else if (limit && currentPage) {
      books = await getPaginatedBooks(limit, currentPage);
    } else {
      books = await allBooks();
    }

    if (books.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ status: '404', message: '도서가 존재하지않습니다.' });
    }
    return res.status(StatusCodes.OK).json({ status: 200, books });
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '도서 전체 조회 중에 오류가 발생했습니다.' });
  }
};

const getFilterBooks = async (req, res) => {
  try {
    const { bookId } = req.params;

    const books = await getBookById(bookId);
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
