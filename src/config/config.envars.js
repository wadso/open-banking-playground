module.exports = {
  server: {
    port: process.env.PORT
  },
  logging: {
    prettyPrint: true,
    level: process.env.LOG_LEVEL
  },
  connectors: {
    mongodb: {
      connectionString: process.env.MONGO_CON_STRING
    }
  }
};
