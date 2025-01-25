const loanRepository = require('../domain/persistence/loanRepository');

class LoanService {
  async createLoan(loanData) {
    return await loanRepository.create(loanData);
  }

  async getLoanById(loanId) {
    return await loanRepository.findById(loanId);
  }

  async getAllLoans() {
    return await loanRepository.findAll();
  }

  async updateLoan(loanId, updatedData) {
    return await loanRepository.update(loanId, updatedData);
  }

  async deleteLoan(loanId) {
    return await loanRepository.delete(loanId);
  }
}

module.exports = new LoanService();
