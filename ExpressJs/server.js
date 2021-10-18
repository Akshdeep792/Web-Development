
const express = require("express");
const app = express();

const path = require("path");
const ejs = require("ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


// get - reading data from Server
// post - creating data in server

app.get("/", function(req, res){
   
    res.render("home");
})


app.get("/about", function(req, res){
    res.render("about");
});
app.get("/courses", function(req, res){
    res.render("courses");
});
app.get("/blog", function(req, res){
    res.render("blog");
});
app.get("/contact", function(req, res){
    res.render("contact");
});


app.get('*', (req, res) => {
    res.render("404");
});
app.listen(3000 , function(){
    console.log("Server has started running");
});