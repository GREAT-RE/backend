const express = require("express");
const listingRouter = express.Router();
const ListingController = require("../controllers/listings.controller");


listingRouter.post("/", ListingController.getAllListings);

// listingRouter.post("/filter", ListingController.getAllListings);

listingRouter.get("/popular", ListingController.getPopularListing);

listingRouter.get("/universities", ListingController.getAllUniversities);

listingRouter.get("/universities/:id", ListingController.getListingByDistance);

listingRouter.get("/:id", ListingController.getListingById);

listingRouter.put("/:id", ListingController.editListing);

module.exports = listingRouter;
