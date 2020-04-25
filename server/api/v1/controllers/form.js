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
    console.log(err);
    return res.status(400).json({ message: "validation failed" });
  }
};
