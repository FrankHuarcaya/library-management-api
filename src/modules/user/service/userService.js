const userRepository = require('../domain/persistence/userRepository');

class UserService {
  async createUser(userData) {
    return await userRepository.create(userData);
  }

  async getUserById(userId) {
    return await userRepository.findById(userId);
  }

  async getAllUsers() {
    return await userRepository.findAll();
  }

  async updateUser(userId, updatedData) {
    return await userRepository.update(userId, updatedData);
  }

  async deleteUser(userId) {
    return await userRepository.delete(userId);
  }
}

module.exports = new UserService();
