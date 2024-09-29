const express = require("express");
const connectDB = require("../connectMongo");
require("dotenv").config();
const path = require("path");
const SliderModel = require("../models/slider");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB();

const errorHandler = (error, res) => {
  console.error("Global Error Handler:", error);
  res.status(500).json({ error, message: "Internal Server Error" });
};

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  res.sendFile(filePath);
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world" });
});

app.get("/api/sliders", async (req, res) => {
  const {
    limit = 20,
    orderBy = "id",
    sortBy = "desc",
    keyword,
    page,
  } = req.query;
  const pageLimit = Number(limit);
  let pageNo = Number(page);
  if (!pageNo || pageNo <= 0) pageNo = 1;
  const skip = (pageNo - 1) * pageLimit;
  const query = {};

  if (keyword) {
    query.name = { $regex: keyword, $options: "i" };
  }

  try {
    const data = await SliderModel.find(query)
      .skip(skip)
      .limit(pageLimit)
      .sort({ [orderBy]: sortBy });

    const totalItems = await SliderModel.countDocuments(query);

    const currentPage = pageNo < totalItems ? pageNo : totalItems;

    const response = {
      pageLimit,
      currentPage,
      totalItems,
      totalPages: Math.ceil(totalItems / pageLimit),
      data,
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
