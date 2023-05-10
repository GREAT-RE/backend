const database = require("../../db-config");

const getAll = () => {
  return database.query("SELECT * FROM listing").then(([results]) => results);
};

const getListingsByHost = (listing) => {
  return database
    .query("SELECT * FROM listing WHERE host_id = ?", listing)
    .then(([results]) => results);
};
const getListingById = (id) => {
  return database
    .query("SELECT * FROM listing WHERE listing_id = ?", id)
    .then(([result]) => result);
};

const getPopular = () => {
  return database
    .query("SELECT * FROM listing ORDER BY review_scores_rating DESC LIMIT 3")
    .then(([result]) => result);
};

const getUniversities = () => {
  return database
    .query("SELECT * FROM universities")
    .then(([results]) => results);
};

const getDistance = (id) =>{
  let query =`SELECT * FROM listing ORDER BY distance_${id} ASC`
  return database
  .query(query)
  .then(([result]) => result);
}

// const edit = (id, body) => {
//   return database
//     .query("UPDATE listing SET ? WHERE id = ? ", [body, id])
//     .then(([results]) => results);
// };

// const deleteListing = (id) => {
//   return database
//     .query("DELETE FROM listing WHERE id  = ?", id)
//     .then(([results]) => results);
// };
module.exports = {
  getAll,
  getListingsByHost,
  getListingById,
  getPopular,
  getUniversities,
  getDistance
  //   edit,
  //   deleteListing,
};
