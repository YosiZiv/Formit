const express = require("express");
const router = express.Router();

const { createForm } = require("../controllers/form");
const { getFormById } = require("../controllers/form");
const checkToken = require("../middlewares/authentication");
// @route   POST api/v1/form/
// @desc    Create new Form
// @access  Private
router.get("/:id", getFormById);
router.post("/", checkToken, createForm);

module.exports = router;
