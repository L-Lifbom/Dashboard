# Dashboard

## Description
This project contains a Dashboard layout with widgets. It utilizes fetch request from multiple API's, displays date/time, access to automatically saving note area and features a quicklink save widget. Some highlights include optimizational categorys, locations or dog breeds which in turn creates a dynamic user experience. This project exists as a school assignment.

## Visuals
![Screenshot of Dashboard](src/assets/Screenshot.png)

## Installation
- Node.js is necessary to run this project. Download here: https://nodejs.org/en/download/current

- Clone this project to your preferred directory.

- Start terminal either in:
    Optinal code editor
    Windows: Powershell
    MacOS: Terminal.app

- Navigate to the project directory:
    cd Dashboard

- Install the project's required modules and dependencies, including Axios.
    npm install

- You'll need two API keys to fully utilize this project:
- Weather API key: Follow this link, create an account and retrieve the your specific API key: https://www.weatherapi.com/
- Background API key: Follow this link, create an account and retrieve the your specific API key: https://unsplash.com/developers

- Create a file called .env in the project root directory 
- Paste the following template into it:
    VITE_WEATHER_KEY=YOUR_ACCESS_KEY
    VITE_BACKGROUND_KEY=YOUR_ACCESS_KEY
- Replace YOUR_WEATHER_API_KEY with your Weather API key and YOUR_BACKGROUND_API_KEY with your Background API key.

- Start the project by running the following command:
    npm run dev
- Copy the local path into a web browser, ex Google Chrome & Firefox

- Enjoy!

## Usage
This project includes the following components:
- Help Modal: A modal window providing basic information about how to use the Dashboard. The Help button is located in the top left corner of the page.
- Clock: Displays the current time and date.
- Title: A feature that allows the title of the Dashboard to be manually modified. The title is automatically saved locally to ensure it is consistent on every page load.
- Quicklinks Widget: Enables saving and removing URLs and titles of frequently visited webpages for quick access.
- Weather Widget: Fetches current weather data based on your geolocation, with an option to change the location through an input field.
- Dogs Widget: A widget that displays random dog pictures, with the ability to select specific breeds from a dropdown menu (no API key required).
- Note Widget: A textarea where you can write notes that are automatically saved.
- Background API: A button that changes the Dashboard's background image, including the option to request specific categories of images.

## Reflections on Code Quality

### Introduction

### Strengths

### Weaknesses

### Reflection

## Contact Information
- Github: https://github.com/L-Lifbom