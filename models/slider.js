const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const SliderSchema = new Schema(
  {
    id: { type: Number, required: true },
    user_name: { type: String, required: true },
    score: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = models.Slider || model('Slider', SliderSchema);
