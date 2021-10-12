const fs = require("fs");

const bioData = {
    name : "Akshdeep Singh",
    age: 19,
    status: "student",
}

const jsonData = JSON.stringify(bioData); //--->object to json

fs.writeFile("data.json", jsonData, (err)=>{
    console.log(err);
});

fs.readFile("data.json", "utf-8", (err, data)=>{
    console.log(data);
});