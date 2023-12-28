const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries.ctrl');

router.get('/', countriesCtrl.getCountries);

module.exports = router;
