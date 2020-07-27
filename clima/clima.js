const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9b49f0f5b1f95c770d8cbb7abb48e7d2&units=metric`);
    return resp.data.main.temp;

}


module.exports = {
    getClima
}