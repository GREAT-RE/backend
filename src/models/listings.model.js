const database = require("../../db-config");

const getAll = () => {
  return database.query("SELECT * FROM listing").then(([results]) => results);
};

const getListingsByHost = (listing) => {
  return database
    .query("SELECT * FROM listing WHERE host_id = ?", listing)
    .then(([results]) => results);
};

const edit = (id, body) => {
  return database
    .query("UPDATE listing SET ? WHERE id = ? ", [body, id])
    .then(([results]) => results);
};

const deleteListing = (id) => {
  return database
    .query("DELETE FROM listing WHERE id  = ?", id)
    .then(([results]) => results);
};
module.exports = {
  getAll,
  getListingsByHost,
  edit,
  deleteListing,
};
