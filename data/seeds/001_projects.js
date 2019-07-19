exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "project 1",
          description: "sprint challenge",
          completed: 0
        },
        {
          project_name: "project 2",
          description: "build week challenge",
          completed: 0
        }
      ]);
    });
};
