var systemlogger = require("./lib/log/systemlogger.js");
var express = require("express"),
  app = express();
logger = require("./lib/log/logger.js").console;

app.set("view engine", "ejs");

app.disable("x-powered-by");

//静的ファイルの配信(prod,devで切り替え）
app.use("/public", express.static(__dirname + "/public/" + process.env.NODE_ENV === "dev" ? "dev" : "prod"));

// ルート設定
app.use("/", require("./routes/index.js"));

// systemLoggerを利用
app.use(systemlogger());

// applicationLoggerを利用
var appLogger = require("./lib/log/logger.js").application;
appLogger.addContext("key", "test");
appLogger.error("error sample massage");
//

app.listen(8080);

logger.info("START " + process.env.NODE_ENV);
