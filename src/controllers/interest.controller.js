const Interest = require("../models/interest.model");

const addNewRow = (req, res) => {
  // console.log(req.body)
  Interest.getAllInterestsById(req.body.studId, req.body.listId)
    .then((result) => {
      if (result.length > 0) {
        Interest.deleteInterest(req.body.studId, req.body.listId)
          .then((results) => {
            if (results !== null && results.affectedRows > 0) {
              res.status(201).send("Deleted from your Wishlist.");
            } else {
              res
                .status(404)
                .send("Cannot delete this interest to your Wishlist.");
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error retrieving Interest from database");
          });
      } else {
        Interest.createInterestRow(req.body)
          .then((results) => {
            // console.log(results)
            if (results !== null && results.affectedRows > 0) {
              res.status(201).send("Added to your Wishlist.");
            } else {
              res
                .status(404)
                .send(
                  "Cannot add this interest to your Wishlist. Please select a new interest."
                );
            }
          })
          .catch((error) => {
            console.error(error);
            res.status(500).send("Error retrieving Interest from database");
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving Interest from database");
    });
};

const getAllInterestByUser = (req, res) => {
  const { id } = req.params;
  Interest.getByUser(id)
    .then((result) => {
        if(result && result.length > 0){
            res.status(200).send(result);
        } else (
            res.status(200).send("there isn't any Interest available from this user")
        )
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving listings from database");
    });
};

module.exports = {
  addNewRow,
  getAllInterestByUser,
};
