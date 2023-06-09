const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.APP_PORT ?? 5000;

const test = (req, res) => {
    res.send("Hello World");
  };

app.get("/", test);

app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
}
});
  