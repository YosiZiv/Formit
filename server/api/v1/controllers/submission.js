const { Submission, Form } = require("../../../models/index");

exports.createSubmission = async (req, res) => {
  // START UP CREATE FUNCTION FOR Submission refactore later
  const { body } = req;
  try {
    const newSubmission = await new Submission({ ...body }).save();

    if (!newSubmission) {
      return res.status(400).json({ error: "something went wrong :/" });
    }
    const form = await Form.findOneAndUpdate(
      { _id: body.formId },
      { $inc: { submissions: 1 } }
    );
    return res
      .status(201)
      .json({ data: newSubmission, form, message: "submission created" });
  } catch (err) {
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
    res.status(200).json({ data: submissionsByFormId });
  } catch (error) {
    if (error) return res.status(400).json({ error });
  }
};
