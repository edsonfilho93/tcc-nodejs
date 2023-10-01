const db = require("./db");

async function getTasks() {
  const client = await db.connect();

  const res = await client.query("SELECT * FROM tasks");
  return res.rows;
}

async function saveTask(request) {
  const client = await db.connect();
  const { name, status } = request.body;

  const res = await client.query(
    `INSERT INTO tasks (name, status) VALUES ('${name}', '${status}' )`
  );

  return res.rows;
}

async function deleteTask(id) {
  const client = await db.connect();

  const res = await client.query(`DELETE FROM tasks WHERE id = '${id}'`);

  return res.rows;
}

module.exports = {
  getTasks,
  saveTask,
  deleteTask,
};
