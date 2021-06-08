const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative')
console.log(names)

sayHi("Peter")
sayHi(names.john)
sayHi(names.peter)

console.log(data)

//rember when ever we import module/file, it's gonna invoke whether we assign it to variable or not, whether we export it or not
//also, if you've written any log statement in module then it's gonna run as well
require('./7-mind-grinade')

