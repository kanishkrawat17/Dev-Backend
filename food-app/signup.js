const express = require("express");

const app = express();
const authRouter=  express.Router();

// app.listen("7000", function(){
//     console.log("server is listening on port number 7000")
// })

app.use(express.json());
app.use(express.static('public'));

app.use("/", authRouter);
authRouter
.route("/")
.post(getUserDetails)

let user = [];



function getUserDetails(req, res){
    let {email,name,password} = req.body;
    console.log(req.body);
    console.log(email);
    console.log(name);
    console.log(password);
    user.push({email,password, name});
    res.json({
        message : "response has been sent",
        user : req.body
    });
}

//Redirect
app.get("/user", (req,res)=>{
    res.redirect("/");
})

//app.use() -> it acts a middle ware 
app.use((req,res)=> {
    res.sendFile("public/404.html",{root:__dirname})
});