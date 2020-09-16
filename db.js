const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "High5ghost$",
  database: "dogsapp",
  host: "localhost",
  port: 5432

});

module.exports = pool;
