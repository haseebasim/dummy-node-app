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
  res.send(data);
});

app.listen(3001, () => {
  console.log("listening on port 3001");
});