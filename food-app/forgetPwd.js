const express = require("express");

const app = express();

app.listen("7000", function () {
  console.log("running on 7000");
});

app.use(express.json());
app.use(express.static("public"));

const forgetRoute = express.Router();

app.use("/forgetPassword", forgetRoute);
forgetRoute
.route("/")
.get(getForgetPassowrd)
.post(postForgetPassword);

function getForgetPassowrd(req, res) {
  res.sendFile("./public/index.html", { root: __dirname });
}

function postForgetPassword(req,res){
    let data = req.body;
    res.send({
        message : "recieved",
        data  : data
    })

}


