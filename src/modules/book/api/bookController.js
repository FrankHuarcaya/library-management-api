const bookService = require('../service/bookService');
const BookDTO = require('../dto/bookDTO');

class BookController {
  async createBook(req, res) {
    try {
      const bookData = req.body;
      const newBook = await bookService.createBook(bookData);
      const bookDTO = new BookDTO(newBook);
      res.status(201).json(bookDTO);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getBookById(req, res) {
    try {
      const bookId = req.params.id;
      const book = await bookService.getBookById(bookId);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      const bookDTO = new BookDTO(book);
      res.status(200).json(bookDTO);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllBooks(req, res) {
    try {
      const books = await bookService.getAllBooks();
      const bookDTOs = books.map(book => new BookDTO(book));
      res.status(200).json(bookDTOs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateBook(req, res) {
    try {
      const bookId = req.params.id;
      const updatedData = req.body;
      const updatedBook = await bookService.updateBook(bookId, updatedData);
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      const bookDTO = new BookDTO(updatedBook);
      res.status(200).json(bookDTO);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteBook(req, res) {
    try {
      const bookId = req.params.id;
      const deletedBook = await bookService.deleteBook(bookId);
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new BookController();
