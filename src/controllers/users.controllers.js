const Users = require("../models/users.models");
const { hashPassword, verifyPassword } = require("../helpers/password");
const jwt = require("jsonwebtoken");
const randomString = require("randomstring")

const {sendEmail} = require('../helpers/sendEmail')

const createUser = (req, res) => {
  const { password } = req.body;

  hashPassword(password).then((hashedPassword) => {

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

const forgetPassword = (req, res) => {

  const {email} = req.user
  const temporaryPassword = randomString.generate();

  hashPassword(temporaryPassword).then((hashPassword) => {
  
    let subject = "Temporary Password - Home in Lx"

    sendEmail(email, subject, temporaryPassword)

    Users.changePassword(email, hashPassword)
      .then(results => {
        if(results.affectedRows > 0) {

          res.status(200).send("A temporary Password have been send to your email.")
        }
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Cannot change the password");
      });
  })
}

module.exports = {
  createUser,
  loginUser,
  forgetPassword
};
