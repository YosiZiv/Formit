const express = require("express");
const router = express.Router();

const { createUser, getAllFormsByUserId } = require("../controllers/user");
const checkToken = require("../middlewares/authentication");
// @route   POST api/v1/user/
// @desc    Create new user
// @access  Public
router.post("/", createUser);
router.get("/forms", checkToken, getAllFormsByUserId);
module.exports = router;
