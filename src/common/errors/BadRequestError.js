const JSONError = require('./JSONError');
class BadRequestError extends JSONError {
  /**
   *
   * @param message
   * @param errorCode
   */
  constructor (message, errorCode) {
    super(message, 400, errorCode);
  }
}

module.exports = BadRequestError;
