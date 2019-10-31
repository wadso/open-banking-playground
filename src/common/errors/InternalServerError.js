const JSONError = require('./JSONError');
class InternalServerError extends JSONError {
  /**
   *
   * @param message
   * @param errorCode
   */
  constructor (message, errorCode) {
    super(message, 500, errorCode);
  }
}

module.exports = InternalServerError;
