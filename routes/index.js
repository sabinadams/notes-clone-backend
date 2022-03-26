const router = require("express").Router();

router.use("/notes", require("./notes.router"));

module.exports = router;
