const express = require("express");
const router = express.Router();

const { createSubmission } = require("../controllers/submission");

// @route   POST api/v1/submission/
// @desc    Create new submission
// @access  Public
router.post("/", createSubmission);

module.exports = router;
