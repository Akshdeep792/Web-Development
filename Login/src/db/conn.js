const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Register")
    .then(() => console.log("connection successfull........."))
    .catch((err) => console.log(err));
