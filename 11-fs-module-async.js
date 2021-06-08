const { reafFile, writeFile, readFile }= require('fs')

console.log("start")
readFile('./content/subfolder/first.txt', 'utf8', (err,result) => {
    if (err)
    {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if (err)
        {
            console.log(err)
            return
        }
        const second= result
        writeFile('./content/subfolder/result-async.txt',
        `Here is the result: ${first} and ${second}`,
        (err,result)=>{
            if (err){
                console.log(err)
                return
            }
            console.log("end")
        })
    })
})

console.log("new task")

//OUTPUT (compare it with sync):
//start
//new task
//end
//Meaning that it starts , comes to an end and in the midst read and write the file
//EXAMPLE: There are 10 users and 1 user wants read/write functionality then node allows it do while other 9 users
//can process the other parts of the code