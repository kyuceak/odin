const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
 };



async function insertUsername(username){
    await pool.query("INSERT INTO usernames (username) VALUES ($1)",[username]);
};


async function getSearchResult(partial){
    const { rows } = await pool.query(`SELECT * FROM usernames WHERE usernames.username LIKE '%' || $1 || '%'`,[partial]);
    return rows;
}


async function deleteUsernames(){
    await pool.query("DELETE FROM usernames");
}

module.exports = {
    getAllUsernames,
    insertUsername,
    getSearchResult,
    deleteUsernames,
}
