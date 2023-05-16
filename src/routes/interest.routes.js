const express = require("express");
const interestRouter = express.Router();
const InterestController = require("../controllers/interest.controller");

interestRouter.post("/enquire/:id", InterestController.sendEnquireRequest)

interestRouter.post("/", InterestController.addNewRow);

interestRouter.get("/:id", InterestController.getAllInterestByUser);


module.exports = interestRouter;
