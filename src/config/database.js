const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
    logging: false,
  }
);

// Sincronizar modelos con la base de datos (Solo en desarrollo)
async function syncDatabase() {
  try {
    await sequelize.sync({ alter: true }); // Cambia a { force: true } si quieres borrar la tabla y recrearla
    console.log('✅ Database synchronized');
  } catch (error) {
    console.error('❌ Error syncing database:', error);
  }
}

syncDatabase();

module.exports = sequelize;
