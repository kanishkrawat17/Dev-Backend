const express = require("require");

const app = express();

app.listen("13213", function(){
    console.log("listening on port no");
})

let user = [];

app.get("/",(req,res)=>{
    res.send("<h1>This is fine</h1>");
})

app.post("/", (res,res)=>{
    user = req.body;

    res.json(user)
})



const authRouter = express.Router();

app.use("/users",authRouter )
authRouter
.route("/")
.get(getUser)


function getUser(req,res){
    res.send("okay");
}




















// const express = require("express");
// const app = express(); //  this is important to use

// // app.listen("5050", function(){
// //     console.log("App is running on 5050 port number");
// // });


// app.use(express.json());
// let user = {};

// app.get("/", (req, res) => {
//   res.send('<input type="text" ></input> ');
// });

// // get =>  client <-- server
// app.get("/users", (req, res) => {
//   res.send(user);
// });

// // post =>   client --> server
// app.post("/users", (req, res) => {
//   user = req.body;
//   res.send("data has been added succesfully");
// });

// app.patch("/users", (req, res) => {
//   let obj = req.body;
//   for (let key in obj) {
//     user[key] = obj[key];
//   }
//   res.json(user);
// });

// app.delete("/users", (req, res) => {
//   user = {};
//   res.send(user);
// });

// app.get("/user/:id", (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });
