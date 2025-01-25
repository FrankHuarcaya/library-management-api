const express = require('express');
const routes = require('./routes/index'); // 📌 Importamos el index de rutas

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configuración de rutas con prefijo `/api`
app.use('/api', routes);


module.exports = app;