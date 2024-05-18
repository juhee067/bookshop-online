const db = require('../models');
const { Op } = require('sequelize');
const Book = db.books;

const bookService = {
  allBooks: () => {
    return Book.findAll();
  },
  bookById: async (req) => {
    const { bookId } = req.params;
    return await Book.findOne({ where: { bookId } });
  },
  getBooksByCategory: () => {},
  getNewBooks: () => {},
  getPaginatedBooks: () => {},
};
module.exports = bookService;
