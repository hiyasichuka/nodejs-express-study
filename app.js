var express = require("express"),
  app = express();

app.set("view engine", "ejs");

app.disable("x-powered-by");

//静的ファイルの配信
app.use("/public", express.static(__dirname+"/public"));

// ルート設定
app.use("/",require("./routes/index.js"));

app.get("/", (req, res) => {
  res.render("./index.ejs");
});

app.listen(8080);
console.log(process.env.NODE_ENV);