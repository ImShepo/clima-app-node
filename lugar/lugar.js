const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUlr = encodeURI(dir);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ encodedUlr }&appid=9b49f0f5b1f95c770d8cbb7abb48e7d2`);

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}