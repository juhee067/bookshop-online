const db = require('../models');
const { Op } = require('sequelize');
const Book = db.books;

const bookService = {
  allBooks: () => {
    return Book.findAll();
  },
  getBookById: async (req) => {
    const { bookId } = req.params;
    return await Book.findOne({ where: { bookId } });
  },

  getBooksByCategory: async (req) => {
    const { categoryId } = query;
    return await Book.findOne({ where: { category_id: categoryId } });
  },
  getNewBooks: async (req) => {
    const { news } = query;
    return await Book.findOne({ where: { news: categoryId } });
  },
  getPaginatedBooks: () => {
    const { limit, currentPage } = query;
  },
};
module.exports = bookService;
