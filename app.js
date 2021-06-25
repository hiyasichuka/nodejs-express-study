var express = require("express");
var app = express();

// app.get("/user/:id", (req, res) => {
//   res.status(200).send("OK");
// });

app.use("/user",require("./router/user.js"));

app.listen(8080);