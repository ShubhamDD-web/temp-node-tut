const path = require('path')

console.log(path.sep)


//joining paths
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//geting the file name from the path
const base = path.basename(filePath)
console.log(base)

//absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)