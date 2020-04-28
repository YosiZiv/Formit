const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { SECRET, TOKEN_EXPIRES } = require("../../../env");
const { User } = require("../../../models/index");

exports.createSession = async (req, res) => {
  const {
    body: { email, password },
  } = req;

  const user = await User.findOne({ email });
  //  check for user
  if (!user) {
    return res.status(400).json({ error: "email or password incorrect" });
  }
  bcrypt
    .compare(password, user.password)
    .then((isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ message: "email or password incorrect" });
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
      return res.status(400).json({ message: "email or password incorrect" });
    })
    .catch(() => {
      return res.status(400).json({ message: "Something went wrong :/" });
    });
};
