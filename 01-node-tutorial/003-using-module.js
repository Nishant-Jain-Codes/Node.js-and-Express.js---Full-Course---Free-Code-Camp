//module -> encapsulated code (only share minimum)
//every file in node is a module by default
//node uses commonJS module system to handle modules
const sayHi = require('./005-module-function')
const names = require('./004-module-names')
// when using our own made module we need to use ./ to specify that it is a file in the same directory
//require(xyz) first runs the code in xyz and then returns the exports object
console.log(names)
// { trippy: 'Trippy', ronaldo: 'Ronaldo' }
sayHi('messi')
// sayHi(nishant)
sayHi(names.trippy)
sayHi(names.ronaldo)
// even when we dont use the name in the file it will still run the code in the file
require('./007-mind-granade')