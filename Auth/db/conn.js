const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Auth")
    .then(() => console.log("connection successfull........."))
    .catch((err) => console.log(err));

    // mongoose.set({getUserIndex:"true"});