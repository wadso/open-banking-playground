
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

Auth.prototype.init = function (config) {
  return (fastify, optns, next) => {
    next()
  }
}

module.exports = Auth;