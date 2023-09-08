const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const http = require("http");
var socketFunc = require("./socket.js");

const APP_PORT = process.env.DREAM_PORT;

const mongosetup = require("./configs/database");
mongosetup.setup(app);

app.use(express.json());
app.use(cors());
require("dotenv").config({ path: process.env.NODE_ENV });
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", require("./routes/index"));

app.get("/", function (req, res, next) {
  return res.json({ message: "Welcome API Example Test" });
});

const { cronjobExportDB } = require("./app/controller/export/cronjobExport");

cronjobExportDB();

const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer);
socketFunc.socketAll(io);

httpServer.listen(APP_PORT, () => {
  console.log("App running on port" + APP_PORT);
  console.log({
    db_host: process.env.DATABASE_HOST,
  });
});
module.exports = app;
