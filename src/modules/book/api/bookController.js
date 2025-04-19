const bookService = require('../service/bookService');
const BookDTO = require('../dto/bookDTO');

class BookController {

async createBook(req, res) {
    try {
      const bookData = req.body;
      const response = await bookService.createBook(bookData);
      if (response.data) {
        response.data = new BookDTO(response.data);
      }
      res.status(response.status).json(response);
    } catch (error) {
      res.status(400).json({
        timestamp: new Date().toISOString(),
        status: 400,
        message: 'Error al crear el libro',
        error: error.message,
      });
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
      const response = await bookService.getAllBooks();

      if (response.status === 200 && response.data) {
        response.data = response.data.map(book => new BookDTO(book));
      }
      res.status(response.status).json(response);
    } catch (error) {
      res.status(500).json({
        timestamp: new Date(),
        status: 500,
        message: 'Error interno del servidor',
        error: error.message
      });
    }
  }

  async updateBook(req, res) {
    try {
      const bookId = req.params.id;
      const updatedData = req.body;
      const response = await bookService.updateBook(bookId, updatedData);
      if (response.data) {
        response.data = new BookDTO(response.data);
      }
      res.status(response.status).json(response);
    } catch (error) {
      res.status(400).json({
        timestamp: new Date().toISOString(),
        status: 400,
        message: 'Error al actualizar el libro',
        error: error.message,
      });
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
