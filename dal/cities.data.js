const db = require('../storage/db');

async function getCities(params) {
        if (params) {
            const result = await db.query(`SELECT city_name FROM cities WHERE country_id=${params.countryId}`);
            return result;
        }
       const result = await db.query(`SELECT city_name FROM cities`);
       console.log(result);
       return result;
}

module.exports = {
    getCities
};
