//we are using built in modules now

const os = require('os')
const user = os.userInfo()
console.log(user)

//method for uptime in seconds
console.log(`The uptime is ${os.uptime()} seconds`)


const currentUser = {
    name : os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentUser)