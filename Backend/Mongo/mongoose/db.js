const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Eduford")
    .then(() => console.log("connection successfull........."))
    .catch((err) => console.log(err));

const createSchema = new mongoose.Schema({

    Name : {
        type : String,
        required : 1,
        lowercase : true,

    },
    No : {
        type : Number,
        required : 1,
        validate(value){
            if(value < 0){
                throw new error("Number cannot be negative");
            }
        }
    },
    Owner : {
        type : String,
        required : 1,
        lowercase : true,
        trim : true,
        minlength :[2,"Owner name atleast contain 2 letters"]
    },
     
    date : {
        type: Date,
        default : Date.now
    }
})


const Playlist = new mongoose.model("Baena", createSchema);





// const createDocument = async ()=>{
//     try{
//         const DBH = new Playlist({
//             Name : "Dragon Ball heroes",
//             No : 37,
//             Owner : "Akshdeep Singh",
//         })
//         const Roast = new Playlist({
//             Name : "Roast",
//             No : 70,
//             Owner : "Akshdeep Singh",
//         })
//         const Vlogs = new Playlist({
//             Name : "Vlogs",
//             No : 10,
//             Owner : "Akshdeep Singh",
//         })
//         const result = await Playlist.insertMany([DBH, Roast, Vlogs]);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createDocument();


const getDocument = async () => {
    try{
        const result = await Playlist
        .find({Name : "Roast"})
        .select({Name : 1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
getDocument();