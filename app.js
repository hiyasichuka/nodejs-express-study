var express = require("express");
var app = express();

app.get("/user/:id?", (req, res) => {
  res.status(200).send("OK");
  console.log(req.params.id);
});

app.listen(3000);