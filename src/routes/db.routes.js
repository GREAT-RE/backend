const dbRouter = require("express").Router();
const dbController = require("../controllers/db.controller");

//* http://localhost:5000/db/company
dbRouter.post("/company", dbController.createCompany);

//* http://localhost:5000/db/listing
dbRouter.post("/listing", dbController.createListing);

//* http://localhost:5000/db/university
dbRouter.post("/university", dbController.createUniversities);

module.exports = dbRouter;
