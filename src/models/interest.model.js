const database = require("../../db-config");


const createInterestRow = (interest) => {
    return database
      .query("INSERT INTO interest SET ?", interest)
      .then(([results]) => results);
}

const getAllInterestsById = (studId, listId) => {
    return database
      .query("SELECT * FROM interest WHERE studId = ? AND listId = ?", [studId, listId])
      .then(([results]) => results);
}

const deleteInterest = (studId, listId) => {
  return database
    .query("DELETE FROM interest WHERE studId = ? AND listId = ?", [studId, listId])
    .then(([results]) => results);
};

const getByUser = (id)=>{
    return database
    .query("SELECT * FROM interest WHERE studId = ? ", id)
    .then(([results]) => results);
}

module.exports = {
    createInterestRow,
    getAllInterestsById,
    deleteInterest,
    getByUser
  };