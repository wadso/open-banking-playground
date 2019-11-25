const fastify = require('fastify');
const helmet = require('fastify-helmet');
const components = require('./components');
const obconnect = require('./common/utils/obconnect');
/**
 *
 * @param config
 * @returns {
 *  fastify.FastifyInstance<http2.Http2SecureServer,
 *  http2.Http2ServerRequest,
 *  http2.Http2ServerResponse>|fastify.FastifyInstance<http2.Http2Server,
 *  http2.Http2ServerRequest,
 *  http2.Http2ServerResponse>|fastify.FastifyInstance<https.Server,
 *  http.IncomingMessage, http.ServerResponse>|fastify.FastifyInstance<http.Server,
 *  http.IncomingMessage, http.ServerResponse>
 * }
 */
exports.getApplication = function (config) {
  const application = fastify({
    logger: config.logging
  });
  application.register(helmet);
  // application.register(obconnect.init());

  return application;
};
