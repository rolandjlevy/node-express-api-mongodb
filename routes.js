const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const SliderModel = require('./models/slider');

// get scores with pagination
router.get('/sliders', async (req, res) => {
  const {
    limit = 20,
    orderBy = 'id',
    sortBy = 'asc',
    keyword,
    page
  } = req.query;
  const pageLimit = Number(limit);
  let pageNo = Number(page);
  if (!pageNo || pageNo <= 0) {
    pageNo = 1;
  }
  const skip = (pageNo - 1) * pageLimit;
  const query = {};

  if (keyword) {
    query.name = { $regex: keyword, $options: 'i' };
  }

  try {
    const data = await SliderModel.find(query)
      .skip(skip)
      .limit(pageLimit)
      .sort({ [orderBy]: sortBy });

    const totalItems = await SliderModel.countDocuments(query);
    const currentPage = pageNo < totalItems ? pageNo : totalItems;

    const response = {
      currentPage,
      totalPages: Math.ceil(totalItems / pageLimit),
      totalItems,
      pageLimit,
      data
    };
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
});

// add a score
router.post('/sliders', async (req, res) => {
  let { userName, score } = req.body;
  userName = sanitizeHtml(userName);
  score = sanitizeHtml(parseInt(score));
  const scores = await SliderModel.find();
  const lastId = Math.max(...scores.map((user) => user.id), 0);
  try {
    const values = {
      id: lastId + 1,
      user_name: userName,
      score
    };
    const newSliderScore = new SliderModel(values);
    const response = await newSliderScore.save();
    const message = `New score for sliders has been saved`;
    return res.json({ message, response });
  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
});

module.exports = router;
