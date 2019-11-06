module.exports = {
  server: {
    port: 3000
  },
  logging: {
    level: 'debug',
    prettyPrint: false
  },
  security: {
    saltRounds: 10,
  },
  connectors: {
    mongodb: {
      dbName: 'playground',
      connectionString: 'mongodb://mongodb:27017/playground',
      indexes: {
        Accounts: [{
          spec: { email: 1},
          options: { unique: true }
        }]
      }
    }
  }
};
