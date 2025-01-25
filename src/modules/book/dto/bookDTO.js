class BookDTO {
  constructor({ 
    id, 
    title, 
    isbn, 
    publicationDate, 
    author, 
    genre, 
    availableCopies, 
    totalCopies, 
    publisher, 
    language 
  }) {
    this.id = id;
    this.title = title;
    this.isbn = isbn;
    this.publicationDate = publicationDate;
    this.author = author;
    this.genre = genre;
    this.availableCopies = availableCopies;
    this.totalCopies = totalCopies;
    this.publisher = publisher;
    this.language = language;
  }
  }
  
  module.exports = BookDTO;
  