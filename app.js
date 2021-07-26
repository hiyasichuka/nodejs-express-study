var express = require("express"),
    app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.render("./index.ejs");
});

app.listen(8080);
console.log(process.env.NODE_ENV);