const db = require("../data/db-config");

const checkRecipeId = async (req, res, next) => {
  try {
    const exists = await db("recipes").where("recipe_id", req.params.recipe_id)
      .first;

    if (!exists) {
      next({
        status: 400,
        message: `recipe with id ${req.params.recipe_id} not found`,
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkRecipeId,
};
