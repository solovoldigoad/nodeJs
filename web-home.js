const http = require("http")

const server = http.createServer((req,res) =>{
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end('<h1>here are the fiels <p> we cont seem to find the page you are looking for <ahref="/"> back home</a>')
})
server.listen(5000);