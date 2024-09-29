const express = require("express");
const connectMongodb = require("../connectMongodb");
require("dotenv").config();
const path = require("path");
const router = require("../routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

connectMongodb();

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  res.sendFile(filePath);
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
