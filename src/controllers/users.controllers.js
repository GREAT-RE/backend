const Users = require("../models/users.models");
const { hashPassword, verifyPassword } = require("../helpers/password");
const jwt = require("jsonwebtoken");

const createUser = (req, res) => {
  const { password } = req.body;
  //* hash the password
  // console.log(password)
  hashPassword(password).then((hashedPassword) => {
    // console.log(hashPassword)
    const user = {
     ...req.body,
      password: hashedPassword,
    };
    console.log(user);
    //* use the model to create a new user
    Users.create(user)
      .then((results) => {
        res.status(201).json({
          user: req.body.email,
          message: `The user ${req.body.email} has been created`,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("can't create user");
      });
  });
};

const loginUser = (req, res) => {
  verifyPassword(req.user.password, req.body.password)
    .then((result) => {
      if (result) {
        const payload = { sub: req.user.id };
        const token = jwt.sign(payload, process.env.PRIVATE_KEY);

        delete req.user.password;

        res.status(200).send({ token, user: req.user });
      } else {
        res.status(401).send("Wrong Password");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Can't login.");
    });
};

// const forgetPassword = (req, res) => {
//   // console.log(req.body)
//   // console.log(req.user)
//   const { email } = req.user;
//   const temporaryPassword = randomString.generate();

//   console.log(temporaryPassword);

//   hashPassword(temporaryPassword).then((hashPassword) => {
//     // console.log(hashPassword)

//     Users.changePassword(email, hashPassword)
//       .then((results) => {
//         if (results.affectedRows > 0) {
//           let subject = "Password changed";
//           sendEmail(email, subject, temporaryPassword);
//           res.status(200).send("An email has been sent with the new password");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         res.status(500).send("can't change the password");
//       });
//   });
// };

module.exports = {
  createUser,
  loginUser,
  // forgetPassword,
};
