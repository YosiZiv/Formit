const { User, Form } = require("../../../models/index");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  const { body } = req;
  //   const errors = validateAdminRegisterInput(body);
  //   if (Object.keys(errors).length) {
  //     return res.status(400).json({ errors });
  //   }
  try {
    const newUser = await new User({ ...body });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (e, hash) => {
        if (e) {
          return res
            .status(401)
            .json({ error: `something went wrong here :/` });
        }
        newUser.password = hash;
        newUser
          .save()
          .then((createdUser) => {
            return res
              .status(200)
              .json({ msg: `User Created Successfully`, data: createdUser });
          })
          .catch((e) => {
            if (e.code === 11000) {
              return res.status(401).json({ error: `Email Have To be Unique` });
            }
            return res.status(500).json({ error: "something went wrong :/" });
          });
      });
    });
  } catch (e) {
    return res.status(401).json({ error: "someting went wrong :/" });
  }
};
exports.getAllFormsByUserId = async (req, res) => {
  const {
    decoded: {
      $__: { _id: userId },
    },
  } = req;
  try {
    const forms = await Form.find({ user: userId });
    if (!Object.keys(forms).length)
      return res.status(400).json({ error: "There is no any forms yet" });
    res.status(200).json({ data: forms });
  } catch (error) {
    res.status(400).json({ error });
  }
};
