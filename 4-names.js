//local
//that means we're not exporting secret in  module.exports
const secret = 'Super'

//shared
const john = 'john'
const peter = 'peter'

//console.log(module)

//In modules, expoort is there, we update export objects so that it can be shared among modules and files

module.exports = { john, peter}

