const Loan = require('../entities/loan.model');

class LoanRepository {
  async create(loanData) {
    return await Loan.create(loanData);
  }

  async findById(loanId) {
    return await Loan.findByPk(loanId);
  }

  async findAll() {
    return await Loan.findAll();
  }

  async update(loanId, updatedData) {
    const loan = await Loan.findByPk(loanId);
    if (!loan) {
      throw new Error('Loan not found');
    }
    return await loan.update(updatedData);
  }

  async delete(loanId) {
    const loan = await Loan.findByPk(loanId);
    if (!loan) {
      throw new Error('Loan not found');
    }
    await loan.destroy();
    return true;
  }
}

module.exports = new LoanRepository();
