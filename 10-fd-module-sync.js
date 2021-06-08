const { readFileSync, writeFileSync } = require('fs')

console.log("start")
const first = readFileSync('./content/subfolder/first.txt')
const second = readFileSync('./content/subfolder/second.txt')

console.log(`${first}`)


//we can set the flags for append(a) and many more, GOOGle it!
writeFileSync(
    './content/subfolder/result.txt',
    `${first} ANDDDD ${second}`,
    {flag : 'a'}
)


console.log("end")

//In sync, every statement is executed one by one! it starts from "start" and read both the files
// and then write and then comes to an end
//If 10 users are reading the file all togther then node might take a long period of time
 

//RUN THIS MODULE
//OUTPUT-----start, end