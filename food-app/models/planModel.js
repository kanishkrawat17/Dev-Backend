const mongoose = require("mongoose")



mongoose.connect(db_link)
.then((db)=>{
    console.log(cb);
})
.catch((err)=>{
    console.log(err);
})


const planSchema = new mongoose.Schema({
    id : {
        type : Number,
        unique : true
    },
    name :{
        type : String , 
        required : true
    },
    ratings : {
        type : Number,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    delivery : {
        type : Boolean
    },
    meals : {
        type : Number
    },
    description : {
        type : String
    }
})



const userModel = mongoose.model('usermodel', planSchema);
