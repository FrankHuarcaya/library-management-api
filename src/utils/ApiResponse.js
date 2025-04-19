class ApiResponse {
  constructor(status, message, data) {
    this.timestamp = new Date().toISOString();
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiResponse;