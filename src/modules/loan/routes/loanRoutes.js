const express = require('express');
const router = express.Router();
const loanController = require('../api/loanController');

router.post('/', (req, res) => loanController.createLoan(req, res));
router.get('/:id', (req, res) => loanController.getLoanById(req, res));
router.get('/', (req, res) => loanController.getAllLoans(req, res));
router.put('/:id', (req, res) => loanController.updateLoan(req, res));
router.delete('/:id', (req, res) => loanController.deleteLoan(req, res));

module.exports = router;
