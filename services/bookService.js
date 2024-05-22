const db = require('../models');
const { Op } = require('sequelize');
const Book = db.Book;
const Category = db.Category;

const bookService = {
  allBooks: () => {
    return Book.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['category_name'],
          required: true,
        },
      ],
    });
  },
  getBookById: async (bookId) => {
    return await Book.findOne({
      where: { book_id: bookId },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['category_name'],
        },
      ],
    });
  },

  getBooksByCategory: async (categoryId) => {
    return await Book.findOne({
      where: { category_id: categoryId },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['category_name'],
        },
      ],
    });
  },
  getNewBooks: async (req) => {
    const { news } = query;
  },
  getPaginatedBooks: () => {
    const { limit, currentPage } = query;
  },
};
module.exports = bookService;
