const database = require("../../db-config");

const create = (user) => {
  return database
    .query("INSERT INTO client SET ?", user)
    .then(([results]) => results);
};

const findOneEmail = (email) => {
    return database
      .query("SELECT * FROM client WHERE email = ?", email)
      .then(([results]) => results);
  };

  const changePassword = (email, hashedPassword) => {
    return database
      .query("UPDATE client SET password = ? WHERE email = ?", [
        hashedPassword,
        email,
      ])
      .then(([results]) => results);
  };

  module.exports = {
    create, 
    findOneEmail,
    changePassword
  }
