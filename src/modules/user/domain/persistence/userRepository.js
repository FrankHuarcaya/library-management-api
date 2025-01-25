const User = require('../entities/user.model');

class UserRepository {
  async create(userData) {
    return await User.create(userData);
  }

  async findById(userId) {
    return await User.findByPk(userId);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }

  async findAll() {
    return await User.findAll();
  }

  async update(userId, updatedData) {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('User not found');
    return await user.update(updatedData);
  }

  async delete(userId) {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('User not found');
    await user.destroy();
    return true;
  }
}

module.exports = new UserRepository();
