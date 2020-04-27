require("dotenv").config();
require("./models/index");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const api = require("./api/v1/api");
const PORT = process.env.PORT || 4000;
const helmet = require("helmet");
const morgan = require("morgan");

app.use(morgan("common")); // morgan package let use see http traffic in server logs easy
app.use(helmet()); // helmet help secure express server with by setting up request headers!!!
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public/build"));
app.use("/api/v1", api);

app.get("*", (req, res, next) => {
  if (req.path === "/api") {
    next();
  }
  res.sendFile(path.join(__dirname, "public", "build", "index.html"));
});

app.listen(PORT, () => console.log("Server is running on Port: " + PORT));
