const { DataTypes } = require('sequelize');
const sequelize = require('../../../../config/database'); 


const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,  // Validación de email
    },
  },
  role: {
    type: DataTypes.ENUM('ADMIN', 'USER'),  // Roles de usuario
    defaultValue: 'USER',
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: true,
});

module.exports = User;
