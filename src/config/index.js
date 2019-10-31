const path = require('path');
const merge = require('lodash.merge');
const logger = require('../common/logger');
const AJV = require('ajv');
const configSchema = require('./config.schema');

/**
 *
 * @returns {*}
 */
function getEnvConfig () {
  let configPath = path.resolve(__dirname, `./config.${process.env.NODE_ENV || 'default'}.js`);
  try {
    return require(configPath);
  } catch (e) {
    logger.error(`Error loading config path: ${configPath}`, e);
    logger.info('Defaulting to configuration on config.default.js');
    return require('./config.default');
  }
}

/**
 *
 * @returns {{server, security, connectors, logging}|*}
 */
function getDefaultConfig () {
  return require('./config.default');
}

/**
 *
 */
function mergeAndValidateConfig () {
  const configData = merge({}, getDefaultConfig(), getEnvConfig());
  console.log(configData)
  const ajv = new AJV({ coerceTypes: true });
  ajv.compile(configSchema, configData);

  return configData;
}


module.exports = mergeAndValidateConfig();
