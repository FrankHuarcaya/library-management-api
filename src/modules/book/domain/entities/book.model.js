const { DataTypes } = require('sequelize');
const sequelize = require('../../../../config/database'); 


const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  publicationDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableCopies: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
  totalCopies: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  language: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'books',
  timestamps: true,
});

module.exports = Book;
