const countriesData = require('../dal/countries.data');

async function getCountries(req, res) {
    try {
        res.json(await countriesData.getCountries());
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCountries
};
