
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({


    Username: {
        type: String,
        required: true,

    },
    Email: {
        type: String,
        required: true,
        unique: true,

    },
    Password: {
        type: String,
        required: true
    },
    Token:{
        type:String
    }
})

// userSchema.methods.generateToken = async function (length) {
//     // try {
//     //     const token = jwt.sign({_id : this._id.toString()}, "qwertyuioplkjhgfdsazxcvbnmqwerty");
//     //     this.tokens = this.tokens.concat({token : token});
//     //     await this.save();
//     //     console.log(token);
//     // } catch (err) {
//     //     console.log(err);
//     // }


//     try {
//         var source = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz1234567890";
//         var token = "";
//         for (var i = 1; i <= length; i++) {
//             token = token + source.charAt(Math.ceil(Math.random() * 72));
//         }
//         this.tokens = this.tokens.concat({ token: token });
//         console.log(token);
//     } catch (err) {
//         console.log(err);
//     }

// }

userSchema.pre("save", async function (next) {
    this.Password = await bcrypt.hash(this.Password, 10);
    // console.log(`${this.Password}`);
    next();
})
const Sign = new mongoose.model("Register", userSchema);

module.exports = Sign;