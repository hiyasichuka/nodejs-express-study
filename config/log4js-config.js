var path = require("path");
var ROOT = path.join(__dirname, "../");

module.exports = {
  appenders: {
    ConsoleLogAppender: {
      type: "console"
    },
    FileLogAppender: {
      type: "file",
      filename: path.join(ROOT, "./log/system.log"),
      maxLogSize: 5000000,
      backups: 5
    },
    MultiFileLogAppender: {
      type: "multiFile",
      base: path.join(ROOT, "./log/"),
      property: "key",
      extension: ".log"
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
    },
    application: {
      appenders: ["MultiFileLogAppender"],
      level: "ERROR"
    }
  }
};