const mongoose = require("mongoose");

const { Schema } = mongoose;

//  Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  forms: {
    type: [Schema.Types.ObjectId],
    ref: "form",
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 30, // min length help to max sure password is beed hash to database
    maxlength: 256,
  },
  token: {
    type: String,
    maxlength: 256,
  },
  createAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});
UserSchema.index({ email: 1 });
const User = mongoose.model("User", UserSchema);
module.exports = User;
