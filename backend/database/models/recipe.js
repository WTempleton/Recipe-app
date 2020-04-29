const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  servings: {
    type: String,
  },
  time: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  directions: {
    type: String,
  },
  picture: {},
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
