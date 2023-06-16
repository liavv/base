const express = require('express');
const router = express.Router();
const getDataRoute = require('./services/get-data/get-data.route');

const routes = (server, logger) =>{
    router.use('/get-data',getDataRoute);
    return router;
};

module.exports = routes;