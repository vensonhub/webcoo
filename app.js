const http = require('http');

http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('Hello , mooc website ')
}).listen(8080,()=>{
        console.log("mooc  server running");
})


