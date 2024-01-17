import axios from "axios";

const url = 'http://api.weatherapi.com/v1/forecast.json?key=0c6b3ff93d2a4572830112130241701&q=London&days=7&aqi=no&alerts=no';

async function getWeather(url) {
    try {
        const response = await axios.get(url);
        console.log(response);
    } catch (error) {
        console.log("Todays weather did not fetch correctly:",error);
    }
}

getWeather(url);