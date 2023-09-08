var mongoose = require("mongoose");

var url = "";
var authSources = {};

if (process.env.NODE_ENV === ".env") {
  url =
    "mongodb://" +
    process.env.DATABASE_HOST +
    ":" +
    process.env.DATABASE_PORT +
    "/" +
    process.env.DATABASE_NAME;
  authSources = { useNewUrlParser: true, useUnifiedTopology: true };
} else {
  url =
    "mongodb://" +
    process.env.DATABASE_USERNAME +
    ":" +
    process.env.DATABASE_PASSWORD +
    "@" +
    process.env.DATABASE_HOST +
    ":" +
    process.env.DATABASE_PORT +
    "/" +
    process.env.DATABASE_NAME;
  authSources = {
    useNewUrlParser: true,
    authSource: "admin",
    useUnifiedTopology: true,
  };
}
console.log("/n/n/n/n", url);

exports.setup = function (app) {
  mongoose
    .connect(url, authSources)
    .then(() => {
      console.log("Successfully connected to the database CHAT ");
    })
    .catch((err) => {
      console.log("err: ", err);
      console.log("Could not connect to the database CHAT  Exiting now...");
      process.exit();
    });
};
