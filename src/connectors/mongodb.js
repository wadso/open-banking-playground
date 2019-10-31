const { MongoClient, Logger } = require('mongodb');
const config = require('../config');
const logger = require('../common/logger');
class Mongo {
  /**
   *
   * @param config
   * @param logging
   */
  constructor ({ connectors: { mongodb: config }, logging }) {
    this.config = config;
    this.models = {};

    Logger.setLevel(logging.level);
    Logger.filter('class', ['Db']);
    Logger.setCurrentLogger((msg, context) => logger.info(msg, context));
  }


  /**
   *
   * @returns {Promise<any>}
   */
  async init() {
    this.db = await new Promise((resolve, reject) => {
      MongoClient.connect(this.config.connectionString, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
        return error ? reject(error) : resolve(client.db(this.config.dbName))
      });
    });

    // create indexes if any was set
    for (let collectionName in this.config.indexes) {
      const types = this.config.indexes[collectionName]
      types.forEach(index => {
        this.db.collection(collectionName).createIndex(index.spec, index.options)
      })
    }
    return this.db
  }
}

module.exports = new Mongo(config);
