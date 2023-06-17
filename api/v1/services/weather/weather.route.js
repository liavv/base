const express = require('express');
const service = require("./weather.service");
const router = express.Router();

router.route('/:city').get(getWeather);

async function getWeather(req,res){
    try{
        const result = await service.getWeather(req);
        if (result == null){
            res.json({err:true});
        }
        else {
            res.json({err: null, data: result});
        }
    }
    catch (e){
        res.json({err:e.message});
    }
}

module.exports = router;