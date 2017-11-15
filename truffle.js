// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'https://rinkeby.infura.io/4OSi05txO49UFjUvzLPt ',
      network_id: '*', // Match any network id
      gas: 4612388
    }
  }
}
