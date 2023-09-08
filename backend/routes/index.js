const express = require("express");
const router = express.Router();
const path = require("path");
const { createUserAccount } = require("../app/controller/users/create");

router.get("/", function (req, res, next) {
  return res.json({ message: "Welcome API Example Test" });
});

router.post("/user/create", createUserAccount);

module.exports = router;
