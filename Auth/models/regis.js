const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passportlocalmongoose = require("passport-local-mongoose");
const passport = require("passport");

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
userSchema.plugin(passportlocalmongoose);
const User = new mongoose.model("User", userSchema);    

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


module.exports = User;