var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {

  const data = {
    items: [

      { name: "takahashi" },
      { name: "suzuki" },
      { name: "yamamoto" }
    ]
  };
  res.render("./index.ejs", data);
});


app.listen(8080);