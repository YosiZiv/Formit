const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET, TOKEN_EXPIRES } = require("../../../env");
const { User } = require("../../../models/index");
const { sessionValidation } = require("../../../core/validations");
exports.createSession = async (req, res) => {
  const {
    body: { email, password },
  } = req;
  const errors = sessionValidation({ email, password });
  if (Object.keys(errors).length) {
    return res.status(400).json({ errors });
  }
  try {
    const user = await User.findOne({ email });
    //  check for user
    if (!user) {
      errors.authorization = "email or password incorrect";
      return res.status(400).json({ errors });
    }
    bcrypt
      .compare(password, user.password)
      .then((isMatch) => {
        if (!isMatch) {
          errors.authorization = "email or password incorrect";
          return res.status(400).json({ errors });
        }
        if (isMatch) {
          return jwt.sign(
            { ...user },
            SECRET,
            { expiresIn: TOKEN_EXPIRES },
            (err, token) => {
              return res.json({
                token: `Bearer ${token}`,
                user: { name: user.name, email: user.email },
                expiresIn: 7,
              });
            }
          );
        }
        errors.authorization = "email or password incorrect";
        return res.status(400).json({ errors });
      })
      .catch(() => {
        errors.server = "Something went wrong :/";
        return res.status(500).json({ errors });
      });
  } catch (error) {
    errors.server = "Something went wrong :/";
    return res.status(500).json({ errors });
  }
};
