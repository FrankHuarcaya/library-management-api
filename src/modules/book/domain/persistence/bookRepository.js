const Book = require('../entities/book.model');

class BookRepository {
  async create(bookData) {
    return await Book.create(bookData);
  }

  async findById(bookId) {
    return await Book.findByPk(bookId);
  }

  async findAll() {
    return await Book.findAll();
  }

  async update(bookId, updatedData) {
    const book = await Book.findByPk(bookId);
    if (!book) {
      throw new Error('Book not found');
    }
    return await book.update(updatedData);
  }

  async delete(bookId) {
    const book = await Book.findByPk(bookId);
    if (!book) {
      throw new Error('Book not found');
    }
    await book.destroy();
    return true;
  }
}

module.exports = new BookRepository();
