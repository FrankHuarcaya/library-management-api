const { DataTypes } = require('sequelize');
const sequelize = require('../../../../config/database');
const User = require('../../../user/domain/entities/user.model');
const Book = require('../../../book/domain/entities/book.model');

const Loan = sequelize.define('Loan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User, // Referencia al modelo User
      key: 'id',
    },
    onDelete: 'CASCADE', // Si se borra un usuario, se eliminan sus préstamos
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Book, // Referencia al modelo Book
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
  loanDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  returnDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('BORROWED', 'RETURNED', 'OVERDUE'),
    allowNull: false,
    defaultValue: 'BORROWED',
  },
}, {
  tableName: 'loans',
  timestamps: true,
});

// Relacionar Loan con User y Book
Loan.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Loan.belongsTo(Book, { foreignKey: 'bookId', as: 'book' });

module.exports = Loan;
