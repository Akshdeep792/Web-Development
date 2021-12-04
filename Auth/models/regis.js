const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email : {
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required: true
    }
})

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`${this.Password}`);
    next();
})
const User = new mongoose.model("User", userSchema);    

module.exports = User;