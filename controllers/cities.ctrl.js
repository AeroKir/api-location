const citiesData = require('../dal/cities.data');

async function getCities(req, res) {
    try {
        res.json(await citiesData.getCities());
    } catch (error) {
        console.log(error);
    }
}

async function getCitiesInCountry(req, res) {
    const params = req.query;

    try {
        res.json(await citiesData.getCities(params));
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCities,
    getCitiesInCountry
};
