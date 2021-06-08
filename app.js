//npm is a place where you can find pre defined codes 

//To use in a particular project:
//npm i <packageName>

//global dependency
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)



const _ = require('lodash')

const items= [1,[2,[3,4]],5]
const flattenItems= _.flatMapDeep(items)
console.log(flattenItems)