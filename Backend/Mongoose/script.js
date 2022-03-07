const mongoose = require("mongoose");
const User = require("./User")
mongoose.connect("mongodb://localhost:27017/newDB")
.then(()=>{console.log("Connection Successful")});


const run = async ()=>{
    // const user = new User({name : "Akshdeep Singh",
    //      age: 20,
    //      email : "Abc@gmail.com",
    //      address: {street : "Milk Road", city : "Naraingarh"}
    //     });
    // await user.save();
    // console.log(user)
    // ******************************************************************
    // const user = await User.create(
    //     {name : "Akshdeep Singh",
    //      age: 20,
    //      email : "Abc@gmail.com",
    //      address: {street : "Milk Road", city : "Naraingarh"}
    //     })
    // const user1 = await User.findById("622659501ae30e02ecdcb797");
    // console.log(user1);


    // const user = await User.where("age").equals(20).populate("bestFriend").limit(1);
    // user[0].bestFriend = "62265821b0bc48184407be0c";
    // await user[0].save();
    try {
        const user = await User.findOne({name : "Akshdeep Singh", email : "abc@gmail.com"})
       console.log(user);
        await user.save();
        console.log(user);
    } catch (err) {
        console.log(err.message)
    }

    
    // console.log(user.namedemail);
    // user.sayHi();
}
run();