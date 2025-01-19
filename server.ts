import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const dirPath = path.join(__dirname, "/dist");

const PATH_CONFIG = {
  '/': path.join(dirPath, "index.html"),
  '/login': path.join(dirPath, "login.html"),
  '/register': path.join(dirPath, "register.html"),
  '/profile': path.join(dirPath, "profile.html"),
  '/not-found': path.join(dirPath, "not-found.html"),
  '/error': path.join(dirPath, "error.html"),
  '*': path.join(dirPath, "not-found.html"),
};

app.use(express.static(dirPath));

Object.entries(PATH_CONFIG).forEach(([key, value]) => {
  app.get(key, (_, res) => {
    res.sendFile(value);
  });
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
