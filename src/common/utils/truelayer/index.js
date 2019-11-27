const got = require('got');
const url = require('url');

module.exports = function (config) {
  const BASE_URL = 'https://auth.truelayer-sandbox.com/';
  const searchParams = Object.assign({}, config, {
    response_type: 'code',
    response: 2477375959,
    providers: 'uk-cs-mock',
    scope: 'info accounts balance cards transactions direct_debits standing_orders offline_access',
  });

  return (fastify, options, next) => {
    fastify.post('/connect/truelayer', async (request, reply) => {
      const { body } = await got(BASE_URL, { searchParams });
      console.log(body);
      reply.code(200)
          .send({ body })
    });
    next()
  }
}