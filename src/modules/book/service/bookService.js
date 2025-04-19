const bookRepository = require('../domain/persistence/bookRepository');
const ApiResponse = require('../../../utils/ApiResponse');

class BookService {


async createBook(bookData) {
    try {
      // Validaciones adicionales o lógica de negocio
      const newBook = await bookRepository.create(bookData);
      return new ApiResponse(201, 'Libro creado con éxito', newBook);
    } catch (error) {
      throw new Error(`Error al crear el libro: ${error.message}`);
    }
  }

  async getBookById(bookId) {
    return await bookRepository.findById(bookId);
  }

  async getAllBooks() {
    const books = await bookRepository.findAll();

    if (books.length === 0) {
      return new ApiResponse(204, 'No se encontraron libros.');
    }

    return new ApiResponse(200, 'Libros listados con éxito', books);
  }

  async updateBook(bookId, updatedData) {
    try {
      const updatedBook = await bookRepository.update(bookId, updatedData);
      if (!updatedBook) {
        return new ApiResponse(404, 'Libro no encontrado', null);
      }
      return new ApiResponse(200, 'Libro actualizado con éxito', updatedBook);
    } catch (error) {
      throw new Error(`Error al actualizar el libro: ${error.message}`);
    }
  }

  async deleteBook(bookId) {
    return await bookRepository.delete(bookId);
  }
}

module.exports = new BookService();
