const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "postgres",
    database: "student",
    password: "password",
    port: 5432,
});

module.exports = pool;