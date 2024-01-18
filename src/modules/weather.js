import axios from "axios";

let city = "stockholm"
let weather = [
    document.querySelector('.weather-today'),
    document.querySelector('.weather-tomorrow'),
    document.querySelector('.weather-extra-day')
]

let minmax = document.querySelector('.minmax')

async function fetchWeather() {
    const apiKey1 = "0c6b3ff93d2a4572830112130241701"
    let url1 = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey1}&q=${city}&days=7&lang=en`;

    try {
        const response = await axios.get(url1);
        const weatherData = response.data;
        console.log("Weather successfully fetched.");
        updateWeather(weatherData);

    } catch (error) {
        console.log("Weather was not fetched: " + error);
    }
}

function updateWeather(weatherData) {
    for (let i = 0; i < 3; i++) {
        let temp, current;
        const day = weather[i]

        if (i === 0) {
            temp = weatherData.current.temp_c;
            current = "now: "
        } else {
            temp = weatherData.forecast.forecastday[i].day.avgtemp_c;
            current = "avg: "
        }
        
        const icon = weatherData.forecast.forecastday[i].day.condition.icon;
        const text = weatherData.forecast.forecastday[i].day.condition.text;
        const min = weatherData.forecast.forecastday[i].day.mintemp_c;
        const max = weatherData.forecast.forecastday[i].day.maxtemp_c;

/*         let minmaxHtml = 
        `<p>min: ${min}°C</p>
        <p>max: ${max}°C</p>`;
        minmax.innerHTML = minmaxHtml */

        let weatherHtml = 
        `<img src="${icon}" alt="Todays weather">
        <div class="weather-text">
            <div>
                <p class="text">${text}</p>
                <p>${current} ${temp}°C</p>
            </div>
            <i class="fa-solid fa-circle-info"></i>
        </div>`;
        day.innerHTML = weatherHtml;
    }
}

fetchWeather();