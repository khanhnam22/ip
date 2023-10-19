var express = require("express");
var app = express();
var port = 5000;
var ip = require("ip");

app.get("/", (req,res) =>{
    var ipAddress = ip.address();
    res.send(ipAddress);
});

app.listen(port, () =>{
    console.log("running");
});