const express = require('express');
const router = express.Router();
const getDataRoute = require('./services/get-data/get-data.route');
const getWeatherRoute = require('./services/weather/weather.route');

const routes = (server, logger) =>{
    router.use('/get-data',getDataRoute);
    router.use('/weather',getWeatherRoute);
    return router;
};

module.exports = routes;