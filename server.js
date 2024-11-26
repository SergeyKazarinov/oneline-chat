// server.js
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const dirPath = path.join(__dirname, "/dist");

app.use(express.static(dirPath));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
