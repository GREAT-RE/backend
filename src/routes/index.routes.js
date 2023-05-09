const hostRouter = require("./hosts.routes");
const listingRouter = require("./listings.routes");

const setUpRoutes = (app) => {
  app.use("/company", hostRouter);
  app.use("/listing", listingRouter);
};

module.exports = {
  setUpRoutes,
};
