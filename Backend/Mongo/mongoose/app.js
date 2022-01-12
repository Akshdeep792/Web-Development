const validator = require("Validator");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Eduford")
    .then(() => console.log("connection successfull........."))
    .catch((err) => console.log(err));



//Schema
// A mongoose schema defines the structure of the document,
// default values , validators, etc..,
// tells field's data type<---------


const courseSchema = new mongoose.Schema({
    Mode: {
        type: String,
        required : true,
        unique : true,
        uppercase : true
    },
    Price: {
        type : Number,
        // validate(value){
        //     if(value<0){
        //         throw new Error("Videos count should not be negative");
        //     }
        // }
        validate : {
            validator: function(value){
                return (value.length < 0)
            },
            message:" Videos count cannot be negative"
        }
    },
    Course:  {
        type: String,
        required : true,
        unique : true,
        lowercase : true,
        trim:true,
        minlength:[2, "Minimum 2 letter required"]
        // enum:["frontend", "backend", "database"]----> THese are only option that user able to enter
    },
    date: {
        type: Date,
        default: Date.now
    }
})





//Models
//A Mongoose model is wrapper in the Mongoose schema.
// Mongoose model provides an interface to the database for crud operations



// **********************collection creation
const Course = new mongoose.model("practicum1", courseSchema);



// creating and inserting document

const createDocument = async () => {

    try {
        const NEETCourse = new Course(
            {
                Mode: "ONLINE",
                Price: 500,
                Course: "NEET",

            }
        )
        const DSACourse = new Course(
            {
                Mode: "ONLINE",
                Price: 700,
                Course: "DSA",

            }
        )
        const WebDevCourse = new Course(
            {
                Mode: "ONLINE",
                Price: 700,
                Course: "WebDev",

            }
        )
        const MLCourse = new Course(
            {
                Mode: "ONLINE",
                Price: 700,
                Course: "ML",

            }
        )
        const AICourse = new Course(
            {
                Mode: "ONLINE",
                Price: 700,
                Course: "AI",

            }
        )

        const result = await Course.insertMany([AICourse]);
        // Course.save()
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
}


createDocument();


// --------------> READING DOCUMENTS <---------------------//



// const getDocument = async ()=>{
//     const result = await Course
//     .find({Mode: {$in :["ONLINE"]}})
//     .select({Course:1});
//     console.log(result);
// }
// const getDocument = async ()=>{
//     const result = await Course
//     .find({$and : [{Mode:"ONLINE"},{Price : 700}]})
//     .select({Course:1});
//     console.log(result);
// }


// const getDocument = async () => {
//     const result = await Course
//         .find({ $and: [{ Mode: "ONLINE" }, { Price: 700 }] })
//         .select({ Course: 1 })
//         .sort({ Course: 1 });
//     // .countDocuments();
//     console.log(result);
// }

// getDocument();







//---------------Update the document
// const updateDocument = async (_id) => {
//     try {
//         const result = await Course.findByIdAndUpdate({ _id }, {
//             $set: { Mode: "LIVE" }
//         },{
//             new :true,
//             useFindAndModify : false
//         });
//         console.log(result);
//     } catch { err } {
//         console.log(err);
//     }
// }


// updateDocument("6172133694756f2e5d2d80ff");




////->>>>>>>>>>>Delete the document

// const deleteDocument = async (_id) =>{
//     try{
//     const result = await Course.findByIdAndDelete({_id});
//     console.log(result);
// }catch(err){
//     console.log(err);
// }
// }


// deleteDocument("6172105ee6f62e2a5729e6de");

///----------------VALIDATION------------------------///

