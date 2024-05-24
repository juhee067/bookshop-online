const {
  getAllBooks,
  getFilterBooks,
} = require('../controllers/BookController.js');
const router = require('express').Router();

router.get('/', getAllBooks);
router.get('/:bookId', getFilterBooks);

module.exports = router;
