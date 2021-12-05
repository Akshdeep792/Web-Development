const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require('ejs');
const path = require("path");
const mongoose = require("mongoose");
require('./db/conn');
const User = require('./models/regis');
const bcrypt = require("bcryptjs");
const passport = require("passport");
const session = require("express-session");
const passportlocalmongoose = require("passport-local-mongoose");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret : "Bella ciao bella ciao",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req,res) =>{
    res.render("home");
})

app.get("/login", (req,res) =>{
    res.render("login");
})
app.post("/login", async(req,res) =>{
    // const email = req.body.username;
    // const password = req.body.password;

    // const data = await User.findOne({email:email});
    // const isMatch = bcrypt.compare(password, data.password);
    // if(isMatch){
    //     res.render("secrets");
    // }else{
    //     console.log("Something Wrong");
    // }
})

app.get("/register", (req,res) =>{
    res.render("register");
})

app.post("/register", async (req,res) => {
    const email = req.body.username;
    const password = req.body.password;

  try {  
      const userSign = new User.register({
        email : email,
        password:password
    })
   const data =  await userSign.save();
    res.redirect("/secrets");
}catch(err){
    console.log(err);
    res.redirect("/register");
}

});

// User.register({email : req.body.username}, req.body.pasword, function(err, user){
//     if(err){
//         console.log(err);
//         res.redirect("/register");
//     }else{
//         passport.authenticate("local")(req,res, function(){
//             res.redirect("/secrets");
//         })
//     }
// })
// })

app.get("/secrets", (req,res) =>{
    if(req.isAuthenticated()){
        res.redirect("/secrets");
    }else{
        res.redirect("/login");
    }
})

















const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The server is live on ${port}`);
})