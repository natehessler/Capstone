const mongoose = require("mongoose");
const recommendationsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9, ]*$/
  },
  dish: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9, ]*$/
  },
  ingredients: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9, ]*$/
  },
  instructions: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9, ]*$/
  },
  time: {
    type: String,
    required: true,
    enum: ['15 minutes or less', '30 minutes or less', '1 hour or less', 'Longer than 1 hour'],
  },
  vegetarian: {
    type: String,
    required: true,
    enum: ['Yes', 'No'],
  }

});
const Recommendations = mongoose.model('Recipe', recommendationsSchema);
module.exports = Recommendations;
