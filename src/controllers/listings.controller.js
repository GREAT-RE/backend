const Listings = require("../models/listings.model");

const getAllListings = (req, res) => {
  // if (req.query.host_id) {
  //   const { host_id } = req.query;
  //   Listings.getListingsByHost(host_id)
  //     .then((results) => {
  //       if (results !== null && results.length > 0) {
  //         res.status(200).send(results);
  //       } else {
  //         res.status(404).send(`Listings from host ID ${host_id} not found`);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       res.status(500).send("Error retrieving listings from database");
  //     });
  // } else {
  Listings.getAll()
    .then((results) => {
      if (results !== null && results.length > 0) {
        res.status(200).send(results);
      } else {
        res.status(404).send("Listings not found");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving listings from database");
    });
  // }
};

// const editListing = (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   Listings.edit(id, body)
//     .then((result) => {
//       res.status(200).send(`Listing with id ${id} successfully updated`);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Error retrieving listings from database");
//     });
// };

// const deleteHostListing = (req, res) => {
//   const { id } = req.params;
//   Listings.deleteListing(id)
//     .then((results) => {
//       if (results.affectedRows) {
//         res.status(202).send(`The listing with id ${id} has been deleted`);
//       } else {
//         res.status(404).send(`The listing with id ${id} was not found`);
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Error retrieving listings from database");
//     });
// };

const getListingById = (req, res) => {
  const { id } = req.params;
  Listings.getListingById(id)
    .then((results) => {
      if (results !== null && results.length > 0) {
        res.status(200).send(results);
      } else {
        res.status(404).send("Listings not found");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving listings from database");
    });
};

const getPopularListing = (req, res) => {
  Listings.getPopular()
    .then((results) => {
      if (results !== null && results.length > 0) {
        res.status(200).send(results);
      } else {
        res.status(404).send("Top 3 Listings not found");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving listings from database");
    });
};

const getAllUniversities = (req, res) => {
  Listings.getUniversities()
    .then((results) => {
      if (results !== null && results.length > 0) {
        res.status(200).send(results);
      } else {
        res.status(404).send("Universities not found");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving Universities from database");
    });
};

const getListingByDistance = (req, res) => {
  const {id} = req.params

  Listings.getDistance(id)
  .then((results) => {
    if (results !== null && results.length > 0) {
      res.status(200).send(results);
    } else {
      res.status(404).send("Universities not found");
    }
  })
  .catch((error) => {
    console.error(error);
    res.status(500).send("Error retrieving Universities from database");
  });
}

module.exports = {
  getAllListings,
  getListingById,
  getPopularListing,
  getAllUniversities,
  getListingByDistance
  //   editListing,
  //   deleteHostListing,
};
