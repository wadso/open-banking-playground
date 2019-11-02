const request = require('got');
const url = require('url');

const config = {
  clientId: 'wadso123-d564d6',
  clientSecret: 'bd9beaef-3946-4e5e-8633-7dd98b24825d',
  authCallback: 'https://auth.truelayer.com/'
}

function Truelayer(config) {
  const baseAuthLink = 'https://auth.truelayer.com/';
  return request(baseAuthLink)
}

function OpenBanking() {}


OpenBanking.strategies = { TrueLayer }