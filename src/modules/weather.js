import axios from "axios";

let locationInput = document.querySelector('.location-input');
let city = null;
let latitude, longitude;
let weather = [
    document.querySelector('.weather-today'),
    document.querySelector('.weather-tomorrow'),
    document.querySelector('.weather-extra-day')
];

async function fetchWeather() {

    const apiKey = import.meta.env.VITE_WEATHER_KEY;
    let location = city ? city : `${latitude},${longitude}`;
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&lang=en`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data;
        console.log("Weather successfully fetched.");
        updateWeather(weatherData);

    } catch (error) {
        console.error("Weather was not fetched: " + error);
        let weatherHtml = 
        `<h4>Attempt to fetch weather was unsuccessful <i class="fa-regular fa-face-frown"></i></h4>`
        for (let i = 0; i < 3; i++) {
            weather[i].innerHTML = weatherHtml;
        }
    }
}

function fetchLocation() {
    let weatherHtml = 
    `<i class="fa-solid fa-spinner"></i>`
    for (let i = 0; i < 3; i++) {
        weather[i].innerHTML = weatherHtml;
    }
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            if (!city) {
                await fetchWeather();
            }
        }, error => {
            console.error('Geolocation error:', error);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

function updateWeather(weatherData) {
    for (let i = 0; i < 3; i++) {
        let temp, current;
        const day = weather[i];

        if (i === 0) {
            temp = weatherData.current.temp_c;
            current = "now: ";
        } else {
            temp = weatherData.forecast.forecastday[i].day.avgtemp_c;
            current = "avg: ";
        }
        
        const icon = weatherData.forecast.forecastday[i].day.condition.icon;
        const text = weatherData.forecast.forecastday[i].day.condition.text;
        const min = weatherData.forecast.forecastday[i].day.mintemp_c;
        const max = weatherData.forecast.forecastday[i].day.maxtemp_c;

        let weatherHtml = 
        `<img src="${icon}" alt="Todays weather">
        <div class="weather-text">
            <div>
                <p class="text">${text}</p>
                <p>${current} ${temp}°C</p>
            </div>
            <i class="fa-solid fa-circle-info weather-info" title="Min: ${min}°C\nMax: ${max}°C"></i>
        </div>`;
        day.innerHTML = weatherHtml;
    }
}

function handleInput() {
    city = locationInput.value.trim();
    fetchWeather();
}

locationInput.addEventListener('input', handleInput);
locationInput.addEventListener('blur', handleInput);

fetchLocation();