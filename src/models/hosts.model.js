const database = require("../../db-config");

const getAll = () => {
  return database.query("SELECT * FROM company").then(([results]) => results);
};

const getById = (id) => {
  return database
    .query("SELECT * FROM company WHERE id = ?", id)
    .then(([results]) => results);
};

// const create = (company) => {
//   return database
//     .query("INSERT INTO company SET ? ", company)
//     .then(([results]) => results);
// };

// const edit = (id, body) => {
//   return database
//     .query("UPDATE company SET ? WHERE ID = ? ", [body, id])
//     .then(([results]) => results);
// };

// const deleteHos = (id) => {
//   return database
//     .query("DELETE FROM company WHERE id = ? ", id)
//     .then(([results]) => results);
// };

module.exports = {
  getAll,
  getById,
  // create,
  // edit,
  // deleteHos,
};
