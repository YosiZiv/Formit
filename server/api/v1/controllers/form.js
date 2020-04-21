const { Form } = require("../../../models/index");

exports.createForm = async (req, res) => {
  // START UP CREATE FUNCTION FOR Form refactored later
  const { body } = req;
  console.log("function 3 work ", Form);
  try {
    const newForm = await new Form({ ...body });
    await newForm.save();
    return res.status(201).json({ data: newForm, message: "form created" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "validation failed" });
  }
};
