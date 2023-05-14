const express = require("express");

const listingRouter = express.Router();

const ListingController = require("../controllers/listings.controller");

//* as a user, I want to be able to see all listings.
//* as a user, I want to be able to see all listings from an host.

listingRouter.get("/", ListingController.getAllListings);

listingRouter.get("/popular", ListingController.getPopularListing);

listingRouter.get("/universities", ListingController.getAllUniversities);

listingRouter.get("/universities/:id", ListingController.getListingByDistance);

listingRouter.get("/:id", ListingController.getListingById);

listingRouter.put("/:id", ListingController.editListing);


//* as a user, I want to be able to edit a listing.

// listingRouter.put("/:id", ListingController.editListing);

module.exports = listingRouter;
