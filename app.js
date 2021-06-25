var express = require("express");
var session = require("express-session");
var app = express();

app.set("view engine", "ejs");

app.use(session({
  secret: "qwerty",
  resave: false,
  saveUninitialized: true,
  name: "sid"
}));

app.get("/", (req, res) => {
  let count = req.session.count || 0;
  req.session.count++;
  res.render("./index.ejs", { count });
});

app.listen(8080);