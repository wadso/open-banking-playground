#!/usr/bin/env node

const config = require('./config');
const logger = require('./common/logger');
const { getApplication } = require('./server');
const { Mongo } = require('./connectors');

const server = getApplication(config);

/**
 *
 * @returns {Promise<null>}
 */
const start = async function () {
  try {
    // await Mongo.init();
    await server.listen(config.server.port, '::');
    return null;
  } catch (error) {
    logger.error('Error starting application: ', error.message);
    process.exit(1);
  }
};

start();
