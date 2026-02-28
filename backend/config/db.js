const mysql = require("mysql2/promise");

// Establishing Connection with MySQL using mysql2 package
async function connectDB() {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: process.env.password,
      database: "olms",
    });

    console.log("✅ Database connected successfully!");
    // const [rows] = await connection.query(
    //   `
    //   SELECT COUNT(*) AS tableCount
    //   FROM information_schema.tables
    //   WHERE table_schema = ?
    // `,"olms"
    // );

    // console.log("Number of tables:", rows[0].tableCount);

    return connection;
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
}

module.exports = connectDB;
