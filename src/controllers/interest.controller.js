const Interest = require("../models/interest.model");
const Users = require("../models/users.models");

const {sendEnquire} = require('../helpers/sendEmail')

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

const sendEnquireRequest = (req, res) => {
    const { id } = req.params;
    Users.findById(id)
    .then((user) => {
      if (user[0] != null && user.length > 0) {
        delete user[0].password;

        let subject = `${user[0].email} request enquire - Home in Lx`

        sendEnquire(user[0], subject)
        // res.status(200).send(user[0]);
      } else {
        res.status(404).send("Forbidden Request");
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
}

module.exports = {
  addNewRow,
  getAllInterestByUser,
  sendEnquireRequest
};
