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
  console.log();

  console.log("function 3 work ", body);
  try {
    const form = await new Form({ ...body });
    await form.save();
    return res.status(201).json({ message: "form created", form });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "validation failed" });
  }
};
