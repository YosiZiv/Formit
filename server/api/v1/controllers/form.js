const { Form } = require("../../../models/index");

exports.createForm = async (req, res) => {
  // START UP CREATE FUNCTION FOR Form refactored later
  const {
    body,
    decoded: {
      $__: { _id },
    },
  } = req;
  body.user = _id;
  const errors = {};
  try {
    // add inputs validation on server side
    //for now mongodb validation is working fine
    const form = await new Form({ ...body }).save();
    if (!form) {
      errors.validation = "validation failed";
      return res.status(400).json({ errors });
    }
    return res.status(201).json({ form });
  } catch (err) {
    errors.server = "something went wrong";
    return res.status(400).json({ errors });
  }
};

exports.getFormById = async (req, res) => {
  // START UP CREATE FUNCTION FOR Form refactored later
  const errors = {};
  const formId = req.params.id;

  try {
    // add inputs validation on server side
    //for now mongodb validation is working fine
    const form = await Form.findOne({ _id: formId });
    if (!form) {
      errors.form = "form didn't found";
      return res.status(204).json({ errors });
    }

    return res.status(200).json({ data: form });
  } catch (err) {
    errors.server = "something went wrong :/ ";
    return res.status(400).json({ errors });
  }
};

exports.deleteForm = async (req, res) => {
  const {
    params: { id: formId },
  } = req;
  try {
    const formToRemove = await Form.findByIdAndDelete({ _id: formId });
    return res.status(200).json({ message: "Form Deleted Successfully" });
  } catch (error) {
    if (error) return res.status(400).json({ error });
  }
};
