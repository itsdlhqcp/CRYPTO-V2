// const { STARTING_BALANCE } = require('../config');
// const { ec } = require('../util');

// class Wallet {
//   constructor() {
//     this.balance = STARTING_BALANCE;
//     const keyPair = ec.genKeyPair();

//     this.publicKey = keyPair.getPublic().encode('hex');
//   }
// };

// module.exports = Wallet;
const { STARTING_BALANCE } = require('../config');
const { ec } = require('../util');
const cryptoHash = require('../util/crypto-hash');

class Wallet {
  constructor() {
    this.balance = STARTING_BALANCE;

    this.keyPair = ec.genKeyPair();

    this.publicKey = this.keyPair.getPublic().encode('hex');
  }
  sign(data) {
    return this.keyPair.sign(cryptoHash(data));
  }
};

// module.exports = Wallet;
module.exports = Wallet;