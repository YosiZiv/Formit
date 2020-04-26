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
  try {
    // add inputs validation on server side
    //for now mongodb validation is working fine
    const form = await new Form({ ...body });
    await form.save();
    return res.status(201).json({ message: "form created", form });
  } catch (err) {
    return res.status(400).json({ message: "validation failed" });
  }
};

exports.getFormById = async (req, res) => {
  // START UP CREATE FUNCTION FOR Form refactored later
  const formId = req.params.id;

  try {
    // add inputs validation on server side
    //for now mongodb validation is working fine
    const form = await Form.findOne({ _id: formId });

    if (!form) {
      return res.status(400).json({ message: "form didn't found" });
    }
    console.log("function hit", form);
    return res.status(200).json({ data: form });
  } catch (err) {
    return res.status(400).json({ message: "validation failed" });
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
