const Blockchain = require('./blockchain.js')

const bitcoin = new Blockchain()
bitcoin.createNewBlock(2345, 'IOFDSAHUFHSD', '7a8v7a9g7ax')
bitcoin.createNewBlock(111, 'YUIBHJDKSS', '9x2h5n0a7c3n')
bitcoin.createNewBlock(111, 'BNSOYURBCJ', '0c9s7g4j5jn6')

console.log(bitcoin);