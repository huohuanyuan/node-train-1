module.exports.test = "B"

const modA = require('./05_modA')

console.log('modA: ',modA.test)

module.exports.test = "BB"