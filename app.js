const express = require("express");
require("dotenv").config();
const cors = require("cors")
const app = express();
const port = process.env.APP_PORT ?? 8000;
const {setUpRoutes} = require("./src/routes/index.routes")

const test = (req, res) => {
  res.send("Hello World");
};

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

setUpRoutes(app)

app.get("/", test);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
