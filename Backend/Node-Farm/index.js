const fs = require('fs');
const http = require('http')
const url = require('url')
const replaceTemplate = require('./modules/replacetemplate')
//Synchronous way
// const fileIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(fileIn)
// const fileOut = `This is what we know about avocade: ${fileIn}`
// fs.writeFileSync('./txt/output.txt', fileOut);
// console.log("File Written")

// Asynchronous Way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//     console.log(data)
// })

// console.log("Will read file!")
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR! 💥');

//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written 😁');
//             })
//         });
//     });
// });
// console.log('Will read file!');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const productOverview = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')
const cardOverview = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const productData = JSON.parse(data);
const server = http.createServer((req, res) => {
    console.log(url.parse(req.url, true))
    const { query, pathname } = url.parse(req.url, true)
    // console.log(query.id)
    if (pathname === '/' || pathname === '/overview') {
        const cardHtml = productData.map(el => replaceTemplate(cardOverview, el)).join('')
        const outputHtml = tempOverview.replace("{%PRODUCT_CARDS%}", cardHtml)
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(outputHtml)
    }
    else if (pathname === '/product') {
        // console.log(query.id)
        res.writeHead(200, { 'Content-type': 'text/html' })
        const product = productData[query.id]
        const output = replaceTemplate(productOverview, product)


        res.end(output)
    }
    else if (pathname === '/api') {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(data)
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'page-not-found'
        });
        res.end("Page not found!")
    }
    // res.end("Hello from the server!")
})

server.listen(8000, (req, res) => {
    console.log(`Server is listening on the port: 8000`)
})