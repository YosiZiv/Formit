const express = require("express");
const router = express.Router();

const {
  createSubmission,
  getSubmissionByFormId,
} = require("../controllers/submission");

// @route   POST api/v1/submission/
// @desc    Create new submission
// @access  Public
router.post("/", createSubmission);
// @route   get api/v1/submission/
// @desc    Create new submission
// @access  Public
router.get("/:id", getSubmissionByFormId);
module.exports = router;
