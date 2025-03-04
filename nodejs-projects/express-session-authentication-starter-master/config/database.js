require('dotenv').config();

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DB_STRING,
});

const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    hash VARCHAR(255),
    salt VARCHAR(255)
  );
`;

pool.query(createUserTableQuery)
  .then(() => console.log("Query successfully run"))
  .catch(err => console.log("Error creating table:", err));

// Expose the pool for use elsewhere in your app
module.exports = pool;
