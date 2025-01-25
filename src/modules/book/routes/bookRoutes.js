const express = require('express');
const router = express.Router();
const bookController = require('../api/bookController');

router.post('/', (req, res) => bookController.createBook(req, res));
router.get('/:id', (req, res) => bookController.getBookById(req, res));
router.get('/', (req, res) => bookController.getAllBooks(req, res));
router.put('/:id', (req, res) => bookController.updateBook(req, res));
router.delete('/:id', (req, res) => bookController.deleteBook(req, res));

module.exports = router;
