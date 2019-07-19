exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("project_name", 128)
        .unique()
        .notNullable();
      tbl.text("description", 128).notNullable();
      tbl.integer("completed").notNullable();
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl.integer("project_id").notNullable();
      tbl.text("description", 128).notNullable();
      tbl.text("notes", 128).notNullable();
      tbl.integer("completed").notNullable();
    });
};
exports.down = function(knex) {
  return knex.schema.dropTable("projects").dropTable("actions");
};
