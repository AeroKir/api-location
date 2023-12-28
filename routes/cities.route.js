const express = require('express');
const router = express.Router();
const citiesCtrl = require('../controllers/cities.ctrl');

router.get('/', citiesCtrl.getCities);
router.get('/cities-in-country', citiesCtrl.getCitiesInCountry);

module.exports = router;
