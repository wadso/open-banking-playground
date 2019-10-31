class JSONError extends Error {
  /**
     *
     * @param message
     * @param status
     * @param errorCode
     */
  constructor (message, status, errorCode = 0) {
    super(message);
    this.message = message;
    this.status = status;
    this.errorCode = errorCode;
  }
}

module.exports = JSONError;
