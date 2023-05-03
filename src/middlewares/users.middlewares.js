const Users = require("../models/users.models");

const createNewUser = (req, res, next) => {
  const { email } = req.body;
  //* get from DB if email already exists
  Users.findOneEmail(email)
    .then((results) => {
      if (!results[0]) {
        next();
      } else {
        res.status(409).send("This email address already exists");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("can't create user");
    });
};

const checkEmail = (req, res, next) => {
  const { email } = req.body;

  Users.findOneEmail(email)
    .then((results) => {
      if (results[0]) {
        req.user = results[0];
        next();
      } else {
        res.status(409).send("This email address doesn't exist on DB");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("can't login. please try again");
    });
};

module.exports = {
  createNewUser,
  checkEmail,
};
