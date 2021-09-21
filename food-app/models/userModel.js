const mongoose = require("mongoose");
const validator = require("email-validator");
const db_link = require("../secrets.js");

mongoose.connect(db_link)
.then(function(db){
    console.log("db connected");
    // console.log(db);
})
.catch(function(err){
    console.log(err);
})


const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age:{
        type : Number
    },  
    email : {
        type : String,
        required : true,
        unique : true,
        validate : function (){
            return validator.validate(this.email)
        }
    },
    createdAt:{
        type:Date
    },
    password : {
        type:String,
        required:true,
        min:8
    },
    confirmPassword : {
        type : String,
        required : true,
        min : 8,
        validate:function(){
            return this.password==this.confirmPassword
        }
    }
});

const userModel = mongoose.model('userModel',userSchema);
userSchema.pre('save',function(){
    this.confirmPassword=undefined;
});
// (async function createUser(){
//     let user={
//         name:'Abhi',
//         age:20,
//         email:'abc@gmail.com',
//         password:'12345678',
//         confirmPassword:'12345678'
//     };
//     let userObj=await userModel.create(user);
//     console.log(userObj);
// })();

module.exports = userModel
  
