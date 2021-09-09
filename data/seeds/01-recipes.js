exports.seed = function (knex, Promise) {
  // we are not trucating here anymore
  return knex("recipes").insert([
    {
      recipe_id: 1,
      recipe_name: "Bowl of Cereal",
      created_at: "2021-01-01 08:23:19.120",
    },
    {
      recipe_id: 2,
      recipe_name: "Ghetto Bowl of Cereal",
      created_at: "2021-02-01 08:23:18.120",
    },
  ]);
};
