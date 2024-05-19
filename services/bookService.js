const db = require('../models');
const { Op } = require('sequelize');
const Book = db.books;
const Category = db.category;

const bookService = {
  allBooks: () => {
    return Book.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['category_name'],
        },
      ],
    });
  },
  getBookById: async (bookId) => {
    return await Book.findOne({
      where: { bookId },
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
