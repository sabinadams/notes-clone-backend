const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({
    message: "Notes Route",
  });
});

module.exports = router;
