const repository = require('./weather.repository');
async function getWeather(req){

    const lonlat = await repository.getLonLatByCity(req);
    let weather=null;
    if (lonlat.lon!=null && lonlat.lat!=null){
        weather = await repository.getWeatherByLonLat(lonlat,req);
    }
    
    return weather;
}


module.exports = {
    getWeather
};