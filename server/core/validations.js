const Validator = require("validator");

exports.sessionValidation = ({ email = "", password = "" }) => {
  const errors = {};
  //  Email validation
  if (!Validator.isEmail(email)) {
    errors.email = "Email format incorrect";
  }
  if (Validator.isEmpty(email)) {
    errors.email = "Email Required!";
  }
  //  password validation
  if (!Validator.isLength(password, { min: 6, max: 256 })) {
    errors.password = "Password must be between 6 - 256";
  }
  if (Validator.isEmpty(password)) {
    errors.password = "Password Required!";
  }
  return errors;
};
exports.createUserValidation = ({
  name = "",
  email = "",
  password = "",
  passwordConfirm = "",
}) => {
  const errors = {};

  //  first name validations
  if (!Validator.isLength(name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 - 30 char ";
  }
  if (Validator.isEmpty(name)) {
    errors.name = "Name Required!";
  }
  //  email validation

  if (!Validator.isEmail(email)) {
    errors.email = "Email format incorrect";
  }
  if (Validator.isEmpty(email)) {
    errors.email = "Email Required";
  }
  //  password  && password confirm validation
  if (password !== passwordConfirm) {
    errors.passwordConfirm = "password didn't match";
  }
  if (!Validator.isLength(password, { min: 6, max: 256 })) {
    errors.password = "password must be between 6 - 256";
  }
  return errors;
};
