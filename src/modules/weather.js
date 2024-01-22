// Imports axios for HTTP fetch requests
import axios from "axios";

// Selecting DOM elements
let locationInput = document.querySelector('.location-input');
let weather = [
    document.querySelector('.weather-today'),
    document.querySelector('.weather-tomorrow'),
    document.querySelector('.weather-extra-day')
];

// Initiate variables to store city input and geographical coordinates
let city = null;
let latitude, longitude;

// Asynchronous function to fetch weather data
async function fetchWeather() {
    // Retrieves API key from .env variables
    const apiKey = import.meta.env.VITE_WEATHER_KEY;
    // Determine location using city name or latitude/longitude
    let location = city ? city : `${latitude},${longitude}`;
    // API url used to fetch weather data
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&lang=en`;

    try {
        // Uses GET request to Weather API
        const response = await axios.get(url);
        const weatherData = response.data;
        console.log("Weather successfully fetched.");
        updateWeather(weatherData);

    } catch (error) {
        // Logs error
        console.error("Weather was not fetched: " + error);
        // Updates the weather container with error message
        let weatherHtml = 
        `<h4>Attempt to fetch weather was unsuccessful <i class="fa-regular fa-face-frown"></i></h4>`;
        for (let i = 0; i < 3; i++) {
            weather[i].innerHTML = weatherHtml;
        }
    }
}

// Function to fetch location using Geolocation API
function fetchLocation() {
    // Displays loading spinner while location is being fetching
    let weatherHtml = 
    `<i class="fa-solid fa-spinner"></i>`;
    for (let i = 0; i < 3; i++) {
        weather[i].innerHTML = weatherHtml;
    }

    // Check if geolocation is supported in the browser
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
            // Storing latitude and longitude from the geolocation position
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            // Fetch weather data if no city is manually entered
            if (!city) {
                await fetchWeather();
            }
        }, error => {
            // Handling errors from the Geolocation API
            console.error('Geolocation error:', error);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

// Function to update DOM with weather data
function updateWeather(weatherData) {
    // For loop that initiates three times and changes values depending on which iteration it is 
    for (let i = 0; i < 3; i++) {
        // Variables for temperature and current status
        let temp, current;
        // Selecting the weather container for each day
        const day = weather[i];

        // Assigning data based on whether it's current, tomorrow, or extra day
        if (i === 0) {
            temp = weatherData.current.temp_c;
            current = "now: ";
        } else {
            temp = weatherData.forecast.forecastday[i].day.avgtemp_c;
            current = "avg: ";
        }
        
        // Extracting icon, text, min and max from data
        const icon = weatherData.forecast.forecastday[i].day.condition.icon;
        const text = weatherData.forecast.forecastday[i].day.condition.text;
        const min = weatherData.forecast.forecastday[i].day.mintemp_c;
        const max = weatherData.forecast.forecastday[i].day.maxtemp_c;

        // Displays the weather data in the three different weather boxes
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

// Function to handle location input change
function handleInput() {
    city = locationInput.value.trim();
    fetchWeather();
}

// Event listener on input field that initiates handleInput function with either blur or input
locationInput.addEventListener('input', handleInput);
locationInput.addEventListener('blur', handleInput);

// Initial call to fetch users location
fetchLocation();