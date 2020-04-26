const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET, TOKEN_EXPIRES } = require("../../../env");
const { User } = require("../../../models/index");

exports.createSession = async (req, res) => {
  // START UP CREATE FUNCTION FOR Session refactored later
  const {
    body: { email, password },
  } = req;

  // Distruct From req.body the email and password felids

  // const errors = validateLoginInput(req.body);
  // if (Object.keys(errors).length) {
  //   return res.status(400).json({ errors });
  // }
  const user = await User.findOne({ email });
  console.log("server function", user);

  //  check for user
  if (!user) {
    return res.status(400).json({ error: "email or password incorrect" });
  }
  // if (!user.confirmed) {
  //   errors.global = 'please confirm your email first';
  //   return res.status(403).json({ errors });
  // }
  bcrypt
    .compare(password, user.password)
    .then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ message: "email or password incorrect" });
      }
      if (isMatch) {
        // const userData = {
        //   id: user._id,
        //   firstName: user.firstName,
        //   lastName: user.lastName,
        //   email: user.email,
        // };
        return jwt.sign(
          { ...user },
          SECRET,
          { expiresIn: TOKEN_EXPIRES },
          (err, token) => {
            return res.json({
              token: `Bearer ${token}`,
              expiresIn: 7,
            });
          }
        );
      }
      return res.status(400).json({ message: "email or password incorrect" });
    })
    .catch(() => {
      return res.status(400).json({ message: "Something went wrong :/" });
    });
};
