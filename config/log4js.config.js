var path = require("path");
var ROOT = path.join(__dirname, "../");

module.exports = {
  appenders: {
    ConsoleLogAppender: {
      type: "console"
    },
    FileLogAppender: {
      type: "file",
      filename: path.join(ROOT + "./log/system.log"),
      maxLogSize: 500000,
      backups: 10
    }
  },
  categories: {
    "default": {
      appenders: ["ConsoleLogAppender"],
      level: "ALL"
    },
    system: {
      appenders: ["FileLogAppender"],
      level: "ERROR"
    }
  }
}