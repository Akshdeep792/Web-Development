const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
const ejs = require('ejs');
const generateToken = require("./models/token");
const cookieParser = require("cookie-parser");
require("./db/conn");
const Register = require("./models/sign");
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/secret", (req,res) =>{
    console.log(req.cookies.login_token);
    res.render("secret");
})
app.get("/", (req, res) => {
    res.render("signup");
})
app.post("/", async (req, res) => {

    try {
        const username = req.body.Username;
        const email = req.body.email;
        const password = req.body.password;

        const token = generateToken(100);   

        const registerUser = new Register({
            Username: username,
            Email: email,
            Password: password,
            Token: token
        })

        
        res.cookie("login_token",token , {maxAge: 1200000, httpOnly: true, sameSite : 'lax'});

        const registered = await registerUser.save();
        res.status(201).render("home");
        
    } catch (err) {
        res.status(400).send(err);
        
    }
})
app.get("/login", (req, res) => {
    res.render("login");

})

app.post("/login", async (req, res) => {
    try {
        const username = req.body.Username;
        const password = req.body.password;

        const result = await Register.findOne({ Username: username });
        const isMatch = bcrypt.compare(password, result.Password);
       
        if (isMatch) {

            res.status(201).render("home");
        } else {
            res.redirect("/login");

        }
    } catch (err) {
        res.status(400).send(err);
    }
})




app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
})