const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require('ejs');
const path = require("path");
const mongoose = require("mongoose");
require('./db/conn');
const User = require('./models/regis');
const bcrypt = require("bcryptjs");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) =>{
    res.render("home");
})

app.get("/login", (req,res) =>{
    res.render("login");
})
app.post("/login", async(req,res) =>{
    const email = req.body.username;
    const password = req.body.password;

    const data = await User.findOne({email:email});
    const isMatch = bcrypt.compare(password, data.password);
    if(isMatch){
        res.render("secrets");
    }else{
        console.log("Something Wrong");
    }
})

app.get("/register", (req,res) =>{
    res.render("register");
})

app.post("/register", async (req,res) => {
    const email = req.body.username;
    const password = req.body.password;

  try {  
      const userSign = new User({
        email : email,
        password:password
    })
   const data =  await userSign.save();
    res.render("secrets");
}catch(err){
    console.log(err);
}
})



















const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The server is live on ${port}`);
})