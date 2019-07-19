exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("project_name", 128)
        .unique()
        .notNullable();
      tbl
        .text("description", 128)
        .unique()
        .notNullable();
      tbl
        .bool("completed")
        .unique()
        .notNullable();
      //////////////////////////////////////
      //////////////////////////////////////
      //////////////////////////////////////
    })
    .createTable("actions", tbl => {
      tbl.increments();
      tbl
        .text("description", 128)
        .unique()
        .notNullable();
      tbl
        .text("notes", 128)
        .unique()
        .notNullable();
      tbl
        .bool("completed")
        .unique()
        .notNullable();
    });
};
exports.down = function(knex) {
  return knex.schema.dropTable("projects").dropTable("actions");
};
