exports.ObConnect = require('./auth');
exports.strategies = {};

exports.strategies.Truelayer = require('./strategies/truelayer');
exports.strategies.Yolt = require('./strategies/yolt');