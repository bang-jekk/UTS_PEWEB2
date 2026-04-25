const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "task_manager",
  password: "12345",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("❌ Gagal konek:", err.stack);
  }
  console.log("✅ Berhasil konek ke PostgreSQL!");
  release();
  pool.end();
});