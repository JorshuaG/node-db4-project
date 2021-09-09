exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.string("recipe_name");
      table.timestamp("created_at", true);
    })
    .createTable("ingredients", (table) => {
      table.increments("ingredient_id");
      table.string("ingredient_name").notNullable();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onDelete("restrict")
        .onUpdate("restrict");
      table.integer("step_number").notNullable().unsigned();
      table.string("step_instructions").notNullable();
    })
    .createTable("step_ingredients", (table) => {
      table.increments("quantity_id");
      table.decimal("quantity").notNullable().unsigned();
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("restrict")
        .onUpdate("restrict");
      table
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
        .onDelete("restrict")
        .onUpdate("restrict");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
