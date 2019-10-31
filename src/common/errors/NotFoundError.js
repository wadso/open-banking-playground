const JSONError = require('./JSONError');
class NotFoundError extends JSONError {
  /**
     *
     * @param message
     * @param errorCode
     */
  constructor (message, errorCode) {
    super(message, 404, errorCode);
  }
}

module.exports = NotFoundError;
