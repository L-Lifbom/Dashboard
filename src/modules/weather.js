import axios from "axios";

let city = "Alicante"
let weatherToday = document.querySelector('.weather-today')
let weatherTomorrow = document.querySelector('.weather-tomorrow')
let weatherExtraDay = document.querySelector('.weather-extra-day')

async function fetchWeather() {
    const apiKey = "0c6b3ff93d2a4572830112130241701"
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&lang=en`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data
        console.log("Weather was fetched successfully.")
        updateWeather(weatherData);

    } catch (error) {
        console.log("Weather was not fetched: " + error);
    }
}

function updateWeather(weatherData) {
    const todayTemp = weatherData.current.temp_c;
    const todayMax = weatherData.forecast.forecastday[0].day.maxtemp_c;
    const todayMin = weatherData.forecast.forecastday[0].day.mintemp_c;
    const todayIcon = weatherData.current.condition.icon;
    const todayText = weatherData.current.condition.text;

    const tomorrowTemp = weatherData.forecast.forecastday[1].day.avgtemp_c;
    const tomorrowMax = weatherData.forecast.forecastday[1].day.maxtemp_c;
    const tomorrowMin = weatherData.forecast.forecastday[1].day.mintemp_c;
    const tomorrowIcon = weatherData.forecast.forecastday[1].day.condition.icon;
    const tomorrowText = weatherData.forecast.forecastday[1].day.condition.text;

    const extraDayTemp = weatherData.forecast.forecastday[2].day.avgtemp_c;
    const extraDayMax = weatherData.forecast.forecastday[2].day.maxtemp_c;
    const extraDayMin = weatherData.forecast.forecastday[2].day.mintemp_c;
    const extraDayIcon = weatherData.forecast.forecastday[2].day.condition.icon;
    const extraDayText = weatherData.forecast.forecastday[2].day.condition.text;

    let firstWeatherHTML = 
    `<img src="${todayIcon}" alt="Todays weather">
    <div class="weather-text">
        <div>
            <p class="text">${todayText}</p>
            <p>now: ${todayTemp}°C</p>
        </div>
        <i class="fa-solid fa-circle-info"></i>
        <div class"minmax-temp">
            <p>min: ${todayMin}°C</p>
            <p>max: ${todayMax}°C</p>
        </div>
    </div>`;
    weatherToday.innerHTML = firstWeatherHTML;

    let secondWeatherHTML = 
    `<img src="${tomorrowIcon}" alt="Todays weather">
    <div class="weather-text">
        <div>
            <p class="text">${tomorrowText}</p>
            <p>avg: ${tomorrowTemp}°C</p>
        </div>
        <div>
            <p>min: ${tomorrowMin}°C</p>
            <p>max: ${tomorrowMax}°C</p>
        </div>
    </div>`;
    weatherTomorrow.innerHTML = secondWeatherHTML;

    let thirdWeatherHTML = 
    `<img src="${extraDayIcon}" alt="Todays weather">
    <div class="weather-text">
        <div>
            <p class="text">${extraDayText}</p>
            <p>avg: ${extraDayTemp}°C</p>
        </div>
        <div>
            <p>min: ${extraDayMin}°C</p>
            <p>max: ${extraDayMax}°C</p>
        </div>
    </div>`;
    weatherExtraDay.innerHTML = thirdWeatherHTML;
}

fetchWeather();