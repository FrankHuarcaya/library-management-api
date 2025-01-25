const userService = require('../service/userService');
const UserDTO = require('../dto/userDTO');

class UserController {
  async createUser(req, res) {
    try {
      const userData = req.body;
      const newUser = await userService.createUser(userData);
      res.status(201).json(new UserDTO(newUser));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.status(200).json(new UserDTO(user));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users.map(user => new UserDTO(user)));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      res.status(200).json(new UserDTO(updatedUser));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      await userService.deleteUser(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
