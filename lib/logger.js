var log4js = require("log4js");
var console;

log4js.configure({
  appenders: {
    ConsoleLogAppender: {
      type: "console"
    }
  },
  categories: {
    "default": {
      appenders: ["ConsoleLogAppender"],
      level: "ALL"
    }
  }
});

console = log4js.getLogger();

module.exports = {
  console
};