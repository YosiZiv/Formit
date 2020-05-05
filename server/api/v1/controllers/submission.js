const { Submission, Form } = require("../../../models/index");

exports.createSubmission = async (req, res) => {
  // START UP CREATE FUNCTION FOR Submission refactore later
  const { body } = req;
  const errors = {};
  try {
    const newSubmission = await new Submission({ ...body }).save();

    if (!newSubmission) {
      errors.submission = "validation failed";
      return res.status(400).json({ errors });
    }
    await Form.findOneAndUpdate(
      { _id: body.formId },
      { $inc: { submissions: 1 } }
    );
    return res.status(201).json({ message: "submission created" });
  } catch (err) {
    errors.submission = "validation failed";
    return res.status(400).json({ errors });
  }
};

exports.getSubmissionByFormId = async (req, res, next) => {
  const {
    params: { id: formId },
    decoded: {
      $__: { _id },
    },
  } = req;
  const errors = {};
  try {
    // make sure we find one form with the valid decoded userId from token and the formId from params
    const userForm = await Form.findOne({ user: _id, _id: formId });
    if (!userForm) {
      errors.form = "Error form not found for this user";
      return res.status(400).json({ errors });
    }
    //after that we can use what we find submissions
    const submissionsByFormId = await Submission.find({ formId: userForm });
    if (!Object.keys(submissionsByFormId).length) {
      errors.submissions = "there is no submissions yet";
      return res.status(400).json({ errors });
    }
    res.status(200).json({ data: submissionsByFormId });
  } catch (error) {
    errors.server = "someting went wrong :/";
    if (error) return res.status(400).json({ errors });
  }
};
