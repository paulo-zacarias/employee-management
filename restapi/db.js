require("dotenv").config();
const Pool = require("pg").Pool;

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   database: "employee_management",
//   user: "postgres",
//   password: "postgres",
// });

const pool = new Pool({
  host: process.env.HOST,
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

module.exports = pool;
