const express = require("express");
const Recipe = require("./model");
const { checkRecipeId } = require("./middleware");

const router = express.Router();

router.get("/:recipe_id", checkRecipeId, (req, res, next) => {
  const { recipe_id } = req.params;

  Recipe.getRecipeById(recipe_id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next);
});

module.exports = router;
