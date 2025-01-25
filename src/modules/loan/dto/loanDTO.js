class LoanDTO {
    constructor({ id, loanDate, returnDate, status, userId, bookId }) {
      this.id = id;
      this.loanDate = loanDate;
      this.returnDate = returnDate;
      this.status = status;
      this.userId = userId;
      this.bookId = bookId;
    }
  }
  
  module.exports = LoanDTO;
  