const mongoose = require("mongoose");
const { User } = require("./index");
const { Schema } = mongoose;

//  Create Schema
const FormSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    validate: [
      async (val) => {
        try {
          const userData = await User.findOne({ _id: val });
          return userData ? true : false;
        } catch (err) {
          return false;
        }
      },
      "Error user didn't found",
    ],
  },
  formName: {
    type: String,
    required: true,
    maxlength: 30,
  },
  fields: {
    type: [
      {
        label: { type: String, required: true, maxlength: 30 },
        name: { type: String, required: true, maxlength: 30 },
        type: {
          type: String,
          required: true,
          enum: ["text", "email", "password", "color", "date", "number", "tel"],
        },
        validations: {
          type: [
            {
              name: { type: String, required: true },
              value: { type: String, required: true },
            },
          ],
          validate: [
            (val) => val.length <= 3,
            "validation size cannot exists over 3",
          ],
        },
      },
    ],
    validate: [(val) => val.length <= 10, "inputs size cannot exists over 10"],
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
  submissions: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});
FormSchema.index({ name: 1 });
const Form = mongoose.model("Form", FormSchema);
module.exports = Form;
