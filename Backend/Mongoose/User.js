const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
    street : String,
    city : String
})
const userSchema = new mongoose.Schema({
    name:{
        type : String, 
        min : 4
    }, 
    age : {
        type : Number,
        min : 1,
        max :100,
        validate : {
            validator : v => v%2 ===0 ,
            message : (props) => `${props.value} is not an even number` 
        }
    },
    email : {
        type: String,
        required : true,
        lowercase : true,
        min : 10
    },
    createdAt : {
        type : Date,
        immutable : true,
        default : ()=> Date.now()
    },
    updatedAt : {
        type : Date,
        default : ()=> Date.now()
    },
    bestFriend : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : "User"
    },
    hobbies : [String],
    address :addressSchema,
})

userSchema.methods.sayHi = function(){
    console.log(`Hi your name is ${this.name}`)
}

userSchema.statics.findByName = function(name){
    return this.where({name : new RegExp(name, "i")}).limit(1);
}
userSchema.virtual('namedemail').get(function(){
    return `${this.name} <${this.email}>`
})
userSchema.pre('save', function(next){
    this.updatedAt = Date.now();
    next();
})
userSchema.post('save', function(doc, next){
    doc.sayHi();
    next();
})

module.exports = new mongoose.model("User", userSchema)