const mongoose = require("mongoose");
const recommendationsSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  dish: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  ingredients: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  dish: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  time: {
    type: [String],
    required: true,
    enum: ['Select a Cook Time', '15 minutes or less', '30 minutes or less', '1 hour or less'],
    validate: /^[A-Za-z0-9 ]*$/
  },
  vegetarian: {
    type: [String],
    required: true,
    enum: ['', 'Yes', 'No'],
    validate: /^[A-Za-z0-9 ]*$/
  }

});
const Recommendations = mongoose.model('Recipe', recommendationsSchema);
module.exports = Recommendations;
