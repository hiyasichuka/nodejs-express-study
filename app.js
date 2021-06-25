var express = require("express");
var app = express();

app.set("view engine","jade");

app.get("/",(req,res)=>{
  res.status(200).render("index.jade",{title: "WEB App"});
});


app.listen(8080);