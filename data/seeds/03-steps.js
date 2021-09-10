exports.seed = function (knex, Promise) {
  // we are not trucating here anymore
  return knex("steps").insert([
    {
      step_id: 2,
      recipe_id: 1,
      step_number: 2,
      step_instructions: "Pour 2 cups of cereal into the bowl",
    },
    {
      step_id: 3,
      recipe_id: 1,
      step_number: 3,
      step_instructions: "Pour 1 cup of milk into the bowl and enjoy!",
    },
    {
      step_id: 5,
      recipe_id: 2,
      step_number: 2,
      step_instructions: "Pour 2 cups of cereal into the bowl",
    },
    {
      step_id: 6,
      recipe_id: 2,
      step_number: 3,
      step_instructions: "Pour 1 cup of water into the bowl and enjoy!",
    },
  ]);
};
