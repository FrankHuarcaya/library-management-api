const loanService = require('../service/loanService');
const LoanDTO = require('../dto/loanDTO');

class LoanController {
  async createLoan(req, res) {
    try {
      const loanData = req.body;
      const newLoan = await loanService.createLoan(loanData);
      const loanDTO = new LoanDTO(newLoan);
      res.status(201).json(loanDTO);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getLoanById(req, res) {
    try {
      const loanId = req.params.id;
      const loan = await loanService.getLoanById(loanId);
      if (!loan) {
        return res.status(404).json({ error: 'Loan not found' });
      }
      const loanDTO = new LoanDTO(loan);
      res.status(200).json(loanDTO);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllLoans(req, res) {
    try {
      const loans = await loanService.getAllLoans();
      const loanDTOs = loans.map(loan => new LoanDTO(loan));
      res.status(200).json(loanDTOs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateLoan(req, res) {
    try {
      const loanId = req.params.id;
      const updatedData = req.body;
      const updatedLoan = await loanService.updateLoan(loanId, updatedData);
      if (!updatedLoan) {
        return res.status(404).json({ error: 'Loan not found' });
      }
      const loanDTO = new LoanDTO(updatedLoan);
      res.status(200).json(loanDTO);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteLoan(req, res) {
    try {
      const loanId = req.params.id;
      const deletedLoan = await loanService.deleteLoan(loanId);
      if (!deletedLoan) {
        return res.status(404).json({ error: 'Loan not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new LoanController();
