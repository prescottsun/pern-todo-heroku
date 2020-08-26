const Pool = require("pg").Pool;

const pool = new Pool({
	user: "prescott",
	password: "password",
	host: "localhost",
	database: "pernstack",
	port: 5432
});

module.exports = pool;
