const hostRouter = require("./hosts.routes");
const listingRouter = require("./listings.routes");
const dbRouter = require("./db.routes");
const authRouter = require("./auth.routes");
const interestRouter = require("./interest.routes");

const setUpRoutes = (app) => {
  app.use("/company", hostRouter);
  app.use("/listing", listingRouter);
  app.use("/db", dbRouter);
  app.use("/auth", authRouter)
  app.use("/interest", interestRouter)

};

module.exports = {
  setUpRoutes,
};
