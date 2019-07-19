const db = require("../data/dbConfig");
const knexnest = require("knexnest");
module.exports = {
  find,
  findById,
  makeProject,
  makeAction
};

async function find() {
  return await db.table("projects").select();
}
async function findById(id) {
  let data = await db
    .table("projects")
    .select("*")
    .where({ id });
  let actions = await db
    .table("actions")
    .select()
    .where("project_id", id);

  return { data: { project: data, actions: actions } };
}
async function makeProject(project) {
  const [id] = await db.table("projects").insert(project);
  return await db
    .table("projects")
    .where({ id })
    .select();
}
async function makeAction(actions) {
  const [id] = await db.table("actions").insert(actions);
  return await db
    .table("actions")
    .where({ id })
    .select();
}
/*

*/
