const NotFoundError = require('./NotFoundError');
const BadRequestError = require('./BadRequestError');
const InternalServerError = require('./InternalServerError');
const Errors = {
  /**
     *
     * @param message
     * @param errorCode
     * @returns {NotFoundError}
     * @constructor
     */
  notFoundError (message = 'Not Found', errorCode = null) {
    return new NotFoundError(message, errorCode);
  },
  internalServerError (message = 'Server Error', errorCode = null) {
    return new InetrnalServerError(message, errorCode);
  },
  badRequestError (message = 'Bad Request Error', errorCode = null) {
    return new BadRequestError(message, errorCode);
  }

};

module.exports = Errors;
