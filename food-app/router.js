const express = require("express");
const userRouter = express.Router(); 
const app = express();

app.use(express.json());

let user= {};
// app.listen("4000", function(){
//     console.log("server is running on 4000");
// });

app.use("/user", userRouter);
userRouter
.route("/")
.get(getUser)
.post(createUser)
.delete(deleteUser)
.patch(updateUser)

function getUser(req,res){
    res.send(user);
}

function createUser(req,res){
    user = req.body;
    res.send(user);
}

function updateUser(req, res){
    let obj = {};
    obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.send(user);
}

function deleteUser(req,res){
    user= {}
    res.send(user)
}

app.get("/user/:id", (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    console.log(req);
    res.send(req.params.id);
});