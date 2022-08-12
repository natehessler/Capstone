const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  ingredients: {
    type: String,
    // validate: /^[A-Za-z0-9 ]*$/
  },
  instructions: {
    type: String,
    required: true,
  },
  toppings: [String]
});
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
