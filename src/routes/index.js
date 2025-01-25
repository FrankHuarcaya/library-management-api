const express = require('express');
const router = express.Router();

// Importa las rutas de otros módulos de manera similar

const bookRoutes = require('../modules/book/routes/bookRoutes');
const userRoutes = require('../modules/user/routes/userRoutes');
const loanRoutes = require('../modules/loan/routes/loanRoutes');

// Agrega las rutas de otros módulos de manera similar
router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/loans', loanRoutes);


module.exports = router;
