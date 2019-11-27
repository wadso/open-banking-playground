const fastify = require('fastify');
const helmet = require('fastify-helmet');
const components = require('./components');
const truelayer = require('./common/utils/truelayer');
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
  application.register(truelayer({
    client_id: 'sandbox-wadso-f9ed85',
    client_secret: '00aee465-d29f-431a-b21a-584f07b840ff',
    redirect_uri: 'http://localhost:3000/callback'
  }));

  return application;
};
