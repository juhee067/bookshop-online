const db = require('../models');
const { Op, Sequelize } = require('sequelize');
const Book = db.Book;
const Like = db.Like;
const Category = db.Category;

const commonOptions = {
  include: [
    {
      model: Category,
      as: 'category',
      attributes: [],
    },
  ],
  attributes: {
    include: [
      [Sequelize.col('category.category_name'), 'category_name'],
      [
        Sequelize.literal(
          '(SELECT COUNT(*) FROM Likes WHERE Likes.liked_book_id = Book.book_id)'
        ),
        'likes',
      ],
    ],
  },
};

const bookService = {
  getBookById: async (bookId) => {
    return await Book.findOne({
      where: { book_id: bookId },
      ...commonOptions,
    });
  },

  userLikedBook: async (bookId, userId) => {
    return await Like.findOne({
      where: {
        liked_book_id: bookId,
        user_id: userId,
      },
    });
  },

  getBooksByCategory: async (categoryId) => {
    return await Book.findAll({
      where: { category_id: categoryId },
    });
  },

  getNewBooks: async () => {
    const currentDate = new Date();
    const monthAgo = new Date();
    monthAgo.setMonth(currentDate.getMonth() - 1);

    return await Book.findAll({
      where: {
        pub_date: { [Op.between]: [monthAgo, currentDate] },
      },
    });
  },

  getPaginatedBooks: async (limit, currentPage) => {
    const offset = (currentPage - 1) * limit;
    return await Book.findAll({
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
  },
};
module.exports = bookService;
