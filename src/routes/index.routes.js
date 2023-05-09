const hostRouter = require("./hosts.routes");
const listingRouter = require("./listings.routes");
const dbRouter = require("./db.routes");

const setUpRoutes = (app) => {
  app.use("/company", hostRouter);
  app.use("/listing", listingRouter);
  app.use("/db", dbRouter);
};

module.exports = {
  setUpRoutes,
};
