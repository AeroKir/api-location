const express = require('express');
const { portMain } = require('./constants/config');
const countries = require('./routes/countries.route');
const cities = require('./routes/cities.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.get('/checking', (req, res) => {
    res.json({"message": "Welcome To API Users repairers!"})
});

app.use('/location-api/countries', countries);
app.use('/location-api/cities', cities);

app.listen(portMain, () => {
    console.log(`The app listening at http://localhost:${portMain}`);
});
