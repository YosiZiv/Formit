const { Submission } = require("../../../models/index");

exports.createSubmission = async (req, res) => {
  // START UP CREATE FUNCTION FOR Submission refactore later
  const { body } = req;
  try {
    const newSubmission = await new Submission({ ...body });
    await newSubmission.save();
    return res
      .status(201)
      .json({ data: newSubmission, message: "submission created" });
  } catch (err) {
    if (err.errors.formId.message === "Not Found") {
      return res.status(400).json({ error: "Form Not Found" });
    }
    return res.status(400).json({ error: "validation failed" });
  }
};

exports.getSubmissionByFormId = async (req, res, next) => {
  const {
    params: { id: formId },
  } = req;
  try {
    const submissionsByFormId = await Submission.find({ formId });
    if (!Object.keys(submissionsByFormId).length)
      return res.status(400).json({ error: "there is no submissions yet" });
    res.status(200).json(submissionsByFormId);
  } catch (error) {
    if (error) return res.status(400).json({ error });
  }
};
