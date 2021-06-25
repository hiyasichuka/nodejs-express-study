var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.status(200).render("index.ejs",{title: "WEB App"});
});


app.listen(8080);