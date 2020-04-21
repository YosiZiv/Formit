const { User } = require("../../../models/index");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res) => {
  // START UP CREATE FUNCTION FOR User refactored later
  const { body } = req;
  console.log("function 2 work ", User);

  //   const errors = validateAdminRegisterInput(body);
  //   if (Object.keys(errors).length) {
  //     return res.status(400).json({ errors });
  //   }
  const newUser = await new User({ ...body });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, async (e, hash) => {
      //   if (e) {
      //     errors.bcrypt = `something went wrong here :/`;
      //     return res.status(401).json({ errors });
      //   }
      newUser.password = hash;
      newUser
        .save()
        .then((createdUser) => {
          return res
            .status(200)
            .json({ msg: `User Created Successfully`, createdUser });
        })
        .catch((e) => {
          console.log(e);
          res.status(400).json({ message: "validation failed" });
          //   if (e.code === 11000) {
          //     errors.Email = `Email Have To be Unique`;
          //     return res.status(401).json({ errors });
          //   }
          //   errors.createUser = e;
          //   return res.status(401).json(e);
        });
    });
  });
};
