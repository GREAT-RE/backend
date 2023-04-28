const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5001;

const test = (req, res) => {
    res.send("Hello World");
  };

app.use(express.json())

app.use(
  cors({
      "origin": "http://localhost:3000"
  })
)

app.get("/", test);

app.listen(port, (err) => {
    if (err) {
      console.error("Something bad happened");
    } else {
      console.log(`Server is listening on ${port}`);
}
});
  