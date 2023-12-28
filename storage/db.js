const mysql = require('mysql2');
const dbConfig = require('../config/db-config');

async function query(sql, params) {
    const pool = mysql.createPool(dbConfig);
    const promisePool = pool.promise();

    const connection = await promisePool.getConnection();
    // const connection = await mysql.createConnection(dbConfig);
    const [results, ] = await connection.query(sql, params);

    return results;
}

module.exports = {
    query
};
