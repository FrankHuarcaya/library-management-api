const express = require('express');
const router = express.Router();
const bookRoutes = require('../modules/book/routes/bookRoutes');
// Importa las rutas de otros módulos de manera similar

router.use('/books', bookRoutes);
// Agrega las rutas de otros módulos de manera similar

module.exports = router;
