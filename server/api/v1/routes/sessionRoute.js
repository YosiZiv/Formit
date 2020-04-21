const express = require("express");
const router = express.Router();

const { createSession } = require("../controllers/session");

// @route   POST api/v1/session/
// @desc    Create new session
// @access  Public
router.post("/", createSession);
module.exports = router;
