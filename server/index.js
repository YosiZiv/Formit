require("dotenv").config();
require("./models/index");
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
app.use("/", express.static("public/build"));
app.use("/api/v1", api);

app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log("function 2", res.statusCode, error);
  // const statusCode = res.statusCode ===, 200 ? 500 : res.statusCode;
  console.log("function 2", res.statusCode);
  res.status(res.statusCode);
  res.json({
    error: error.message,
    stack: error.stack,
  });
});

app.listen(PORT, () => console.log("Server is running on Port: " + PORT));
