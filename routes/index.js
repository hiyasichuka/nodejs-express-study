var router = require("express").Router();

router.get("/", (req, res) => {
  // 意図的にエラー発生させる
  throw new Error("sample error");

  res.render("./index.ejs");
});

module.exports = router;