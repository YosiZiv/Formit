const express = require("express");
const router = express.Router();

const { createForm } = require("../controllers/form");
const { getFormById, deleteForm } = require("../controllers/form");
const checkToken = require("../middlewares/authentication");
// @route   POST api/v1/form/:id
// @desc    Create new Form
// @access  Private
router.get("/:id", getFormById);
// @route   GET api/v1/form/
// @desc    Get all forms by id
// @access  Private

router.post("/", checkToken, createForm);

router.delete("/:id", checkToken, deleteForm);

module.exports = router;
