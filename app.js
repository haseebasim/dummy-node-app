const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const data = [
  { name: "haseeb" },
  { name: "ayesha" },
  { name: "hamna" },
  { name: "talha" },
];

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send('My node application.');
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
