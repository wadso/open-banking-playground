
function Auth(config) {
  this.strategies = {};
  this.framework = null;
}

/**
 *
 * @param name
 * @param strategy
 * @returns {Auth}
 */
Auth.prototype.use = function (name, strategy) {
  if(!strategy) {
    throw new Error('Must specify a strategy')
  }
  this.strategies[name] = strategy || {}
  return this;
};

/**
 * returns a compatible interface to fastify.register
 * @param config
 * @returns {Function}
 */
Auth.prototype.init = function (config) {
  return (fastify, optns, next) => {
    console.log('hit the fastify shit')
    next()
  }
}

module.exports = Auth;