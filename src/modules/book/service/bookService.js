const bookRepository = require('../domain/persistence/bookRepository');

class BookService {
  async createBook(bookData) {
    // Validaciones adicionales o lógica de negocio
    return await bookRepository.create(bookData);
  }

  async getBookById(bookId) {
    return await bookRepository.findById(bookId);
  }

  async getAllBooks() {
    return await bookRepository.findAll();
  }

  async updateBook(bookId, updatedData) {
    // Lógica de negocio antes de actualizar, si es necesario
    return await bookRepository.update(bookId, updatedData);
  }

  async deleteBook(bookId) {
    return await bookRepository.delete(bookId);
  }
}

module.exports = new BookService();
