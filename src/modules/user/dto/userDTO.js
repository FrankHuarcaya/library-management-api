class UserDTO {
    constructor({ id, firstName, lastName, email, role, phoneNumber }) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.role = role;
      this.phoneNumber = phoneNumber;
    }
  }
  
  module.exports = UserDTO;
  