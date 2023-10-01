async function connect() {
  const { Pool } = require("pg");
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
  });

  const client = await pool.connect();

  client.release();

  return pool.connect();
}

module.exports = { connect };

