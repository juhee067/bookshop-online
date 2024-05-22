const db = require('../models');
const { Op, Sequelize } = require('sequelize');
const Book = db.Book;
const Category = db.Category;

const bookService = {
  allBooks: async () => {
    try {
      const books = await Book.findAll({
        include: [
          {
            model: Category,
            as: 'category',
            attributes: [],
          },
        ],
        attributes: {
          include: [[Sequelize.col('category.category_name'), 'category_name']],
        },
      });
      return books;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
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
