// npm init -y
// npm i express
// npm i nodemon -g


const express = require("express");

const app = express();
// let port = "1050";

app.listen(port, function(){
    console.log(`your are on port no ${port}`);
})

app.get('/', (req,res)=>{
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    res.send('<h1>Hello lets begin ..!!!!</h1>');
}); 

let obj = {
    "name " : "kanishk"
}

app.get('/users', (req, res)=>{
    res.send(obj);
});


app.get("/home", (req, res)=>{
    res.sendFile("./views/index.html",{root:__dirname});
})


// send -<> gives us 2 things content type and status type.



