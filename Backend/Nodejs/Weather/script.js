const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const app = express();


app.use(bodyparser.urlencoded({extended: true}));

app.get("/", function(req, res){

res.sendFile(__dirname + "/index.html");  

});

app.post("/", function(req,res){
    
       const query = req.body.cityName;
       const apiKey = "93a3f1d85325e64c74ea8ba878dc5495";
       const url = "https://api.openweathermap.org/data/2.5/weather?q= "+ query + "&appid=" + apiKey + "";
       https.get(url, function(response){
           console.log(response.statusCode);
           response.on("data", function(data){
               const weatherdata = JSON.parse(data);
           //     console.log(weatherdata);
           //    console.log(weatherdata.main.temp);
           //    console.log(weatherdata.weather[0].description);
           const icon = weatherdata.weather[0].icon;
           const iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
           res.write("<p>The weather is currently" + weatherdata.weather[0].description + "</p>");
           res.write("<h1>Temperature is " + weatherdata.main.temp + "Kelvin </h1>");
           res.write("<img src=" + iconURL + ">");
           res.send();
           });
       });
});
app.listen(3000, function(){
    console.log("Server has started");
});