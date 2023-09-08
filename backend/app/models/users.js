const mongoose = require("mongoose");
const schemaUsers = mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", schemaUsers, "users");
