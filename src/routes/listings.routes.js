const express = require("express");

const listingRouter = express.Router();

const ListingController = require("../controllers/listings.controller");

//* as a user, I want to be able to see all listings.
//* as a user, I want to be able to see all listings from an host.

listingRouter.get("/", ListingController.getAllListings);

//* as a user, I want to be able to edit a listing.

// listingRouter.put("/:id", ListingController.editListing);

module.exports = listingRouter;
