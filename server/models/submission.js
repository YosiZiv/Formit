const mongoose = require("mongoose");
const { Form } = require("./index");
const { Schema } = mongoose;

//  Create Schema
const SubmissionSchema = new Schema({
  formId: {
    type: Schema.Types.ObjectId,
    ref: "form",
    validate: [
      async (val) => {
        try {
          const formData = await Form.findOne({ _id: val });
          return formData ? true : false;
        } catch (err) {
          return false;
        }
      },
      "Error form didn't found",
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
        name: { type: String, required: true, maxlength: 30 },
        value: { type: String, required: true, maxlength: 30 },
      },
    ],
    validate: [(val) => val.length <= 10, "values size cannot exists over 10"],
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Submission = mongoose.model("submission", SubmissionSchema);
module.exports = Submission;
