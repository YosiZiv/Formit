const express = require("express");
const router = express.Router();

const { createForm } = require("../controllers/form");

// @route   POST api/v1/form/
// @desc    Create new Form
// @access  Private
router.post("/", createForm);

module.exports = router;
