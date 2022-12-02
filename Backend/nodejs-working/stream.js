const fs = require('fs')
const server = require("http").createServer()

server.on("request", (req, res) => {
    //solution 1 -> suitable for small projects
    // fs.readFile("text-file.txt", (err, data) => {
    //     if (err) console.log(err)
    //     res.end(data)
    // })

    // solution 2 -> Streams
    // const reader = fs.createReadStream("text-file.txt")
    // reader.on("data", chunk => {
    //     res.write(chunk)
    // })

    // reader.on("end", () => {
    //     res.end()
    // })

    // solution 3
    const readable = fs.createReadStream("text-file.txt")
    readable.pipe(res)
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listening.....")
})