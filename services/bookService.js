const db = require('../models');
const { Op } = require('sequelize');
const Book = db.books;

const bookService = {
  getAllBooks: () => {
    return Book.findAll();
  },
};
module.exports = bookService;
