const db = require('../storage/db');

async function getCountries() {
       const result = await db.query(`SELECT * FROM countries`);
       console.log(result);
       return result;
}

module.exports = {
    getCountries
};
