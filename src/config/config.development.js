module.exports = {
  server: {
    port: 3000
  },
  logging: {
    prettyPrint: true
  },
  connectors: {
    mongodb: {
      connectionString: 'mongodb://mongodb:27017/crowdshack'
    }
  }
};
