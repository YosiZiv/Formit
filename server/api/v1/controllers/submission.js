const { Submission } = require("../../../models/index");

exports.createSubmission = async (req, res) => {
  // START UP CREATE FUNCTION FOR Submission refactore later
  const { body } = req;
  console.log("function 4 work ", Submission);
  try {
    const newSubmission = await new Submission({ ...body });
    await newSubmission.save();
    return res
      .status(201)
      .json({ data: newSubmission, message: "submission created" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "validation failed" });
  }
};
