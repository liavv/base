const axios = require('axios');

async function getLonLatByCity (req) {
    try{
       const url = `http://api.openweathermap.org/geo/1.0/direct?q=${req.params.city}&limit=1&appid=e3dce278d911b834105b97b58b71d6c3`;

       const result = await axios.get(url);
       return {lon: (result.data !=null & result.data.length > 0 ? result.data[0].lon : null), lat: (result.data !=null & result.data.length > 0 ? result.data[0].lat : null)}
    }
    catch (e){
        console.error(`error on getList is ${e.message}`);
        throw e;
    }

}

async function getWeatherByLonLat (lonlat, req) {
    try{
       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lonlat.lat}&lon=${lonlat.lon}&appid=e3dce278d911b834105b97b58b71d6c3&units=metric`;

       const result = await axios.get(url);
       console.log(result.data);
       return {now:result.data.main.temp.toFixed(0),min:result.data.main.temp_min.toFixed(0),max:result.data.main.temp_max.toFixed(0)};
    }
    catch (e){
        console.error(`error on getList is ${e.message}`);
        throw e;
    }

}

module.exports = {
    getLonLatByCity,
    getWeatherByLonLat
};