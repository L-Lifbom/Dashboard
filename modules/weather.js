import axios from "axios";

let city = "Stockholm"
let weatherToday = document.querySelector('.weather-today')

async function getWeather() {
    const apiKey = ""
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&lang=en`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data

        const temp = weatherData.current.temp_c;
        const icon = weatherData.current.condition.icon;
        const text = weatherData.current.condition.text;
        console.log("Detta är current:" + weatherData.current.temp_c)

        let weatherHTML = 
        `<img src="${icon}" alt="Todays weather">
        <p>${text}</p>
        <p>${temp} C</p>`;
        weatherToday.innerHTML = weatherHTML

    } catch (error) {
        console.log("Todays weather did not fetch correctly:",error);
    }
}

getWeather();