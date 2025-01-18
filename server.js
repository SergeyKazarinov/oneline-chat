// server.js
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const dirPath = path.join(__dirname, "/dist");

app.use(express.static(dirPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(dirPath, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(dirPath, "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(dirPath, "register.html"));
});

app.get("/profile", (req, res) => {
  res.sendFile(path.join(dirPath, "profile.html"));
});

app.get("/not-found", (req, res) => {
  res.sendFile(path.join(dirPath, "not-found.html"));
});

app.get("/error", (req, res) => {
  res.sendFile(path.join(dirPath, "error.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(dirPath, "not-found.html"));
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
