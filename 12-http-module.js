const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/')
    {
        res.end("Welcome to my Home Page")
    }
    if (req.url === '/about')
    {
        res.end("We are about to update")
    }
    res.end(`
    <h1>OOPS</h1>
    <a href='/'>back home</a>ß
    `)
})


server.listen(3000)