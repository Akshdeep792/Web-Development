const express = require("express");
const app = express();
require("./db/conn");
const MensRanking = require("./models/mens")
const require = require("./routers/men")

app.use(express.json());
app.use(router);
// handling post request 

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Server is online on ${port}`);
})