const database = require("../../db-config");

const createCompany = (company) => {
  return database
    .query("INSERT INTO company SET ?", company)
    .then(([results]) => results);
};

const createListing = (listing) => {
  return database
    .query("INSERT INTO listing SET ?", listing)
    .then(([results]) => results);
};

module.exports = {
  createCompany,
  createListing,
};
