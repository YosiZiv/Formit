const express = require("express");
const router = express.Router();

const sessionRoute = require("./routes/sessionRoute");
const userRoute = require("./routes/userRoute");
const formRoute = require("./routes/formRoute");
const submissionRoute = require("./routes/submissionRoute");
router.use("/user", userRoute);
router.use("/session", sessionRoute);
router.use("/form", formRoute);
router.use("/submission", submissionRoute);
module.exports = router;
