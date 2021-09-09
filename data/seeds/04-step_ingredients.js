exports.seed = function (knex, Promise) {
  // we are not trucating here anymore
  return knex("step_ingredients").insert([
    { quantity_id: 1, quantity: 2, step_id: 2, ingredient_id: 3 },
    { quantity_id: 2, quantity: 2, step_id: 5, ingredient_id: 3 },
    { quantity_id: 3, quantity: 1, step_id: 3, ingredient_id: 2 },
    { quantity_id: 4, quantity: 1, step_id: 6, ingredient_id: 1 },
  ]);
};
