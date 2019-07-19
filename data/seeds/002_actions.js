exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          description: "checkout project 1",
          notes: "JUST DO IT",
          completed: 0
        },
        {
          project_id: 1,
          description: "commit project 1",
          notes: "JUST DO IT",
          completed: 0
        },
        {
          project_id: 1,
          description: "push project 1",
          notes: "JUST DO IT",
          completed: 0
        },
        {
          project_id: 2,
          description: "sit back and watch your team do the project",
          notes: "JUST RELAX",
          completed: 0
        }
      ]);
    });
};
