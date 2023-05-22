const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.APP_PORT ?? 5000;
const { setUpRoutes } = require("./src/routes/index.routes");

app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );

app.use(
  cors({
    origin: "https://home-in-lx.onrender.com",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to HomeIn Lx Server");
});

// app.use("/company", hostRouter)
// app.use("/listing", listingRouter)
setUpRoutes(app);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
