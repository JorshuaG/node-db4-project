exports.seed = function (knex, Promise) {
  // we are not trucating here anymore
  return knex("ingredients").insert([
    {
      ingredient_id: 1,
      ingredient_name: "Water",
    },
    {
      ingredient_id: 2,
      ingredient_name: "Milk",
    },
    {
      ingredient_id: 3,
      ingredient_name: "Cereal",
    },
  ]);
};
