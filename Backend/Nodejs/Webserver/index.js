const http = require("http");


const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("Hello from home side");

    }else if(req.url == "/about"){

        res.write("Hellp from about side");
        res.end();
    }else{
        res.writeHead(404, {"content-type" : "text/html"});
        res.end("<h1>404, Page does not exist</h1>");
    }
    
});


server.listen(3000, ()=>{
    console.log("Server has been started")
})