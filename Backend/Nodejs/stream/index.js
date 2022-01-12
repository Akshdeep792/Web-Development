const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req,res)=>{
    // var fs = require("fs");
    // fs.readFile("input.txt", (err, data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString());
    // })
// ***********************************************
//     const rstream = fs.createReadStream("input.txt");
//     rstream.on("data", (chunkdata)=>{
//         res.write(chunkdata);
//     });
//     rstream.on("end", ()=>{
//         res.end();
//     })
// 
// *************************************************
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);
})
server.listen(3000, ()=>{
    console.log("server has been started");
})