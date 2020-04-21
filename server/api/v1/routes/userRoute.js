const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/user");

// @route   POST api/v1/user/
// @desc    Create new user
// @access  Public
router.post("/", createUser);

module.exports = router;
