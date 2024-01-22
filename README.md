# Dashboard

## Description
This project contains a Dashboard layout with widgets. It utilizes fetch request from multiple API's, displays date/time, gives access to a automatically saving note area and features a quicklink save widget. Some highlights include optimizational categorys, location tracking of weather or the ability to choosee between dog breeds. This  in turn creates a dynamic user experience. This project exists as a school assignment.

## Visuals
![Screenshot of Dashboard](src/assets/Screenshot.png)

## Installation
- Node.js is necessary to run this project. Download here: https://nodejs.org/en/download/current

- Clone this project to your preferred directory.

- Start terminal either in:
    Optional code editor
    Windows: Powershell
    MacOS: Terminal.app

- Navigate to the project directory: `cd Dashboard`

- Install the project's required modules and dependencies, including Axios: `npm install`

- You'll need two API keys to fully utilize this project:
- Weather API key: Follow this link, create an account and retrieve the your specific API key: https://www.weatherapi.com/
- Background API key: Follow this link, create an account and retrieve the your specific API key: https://unsplash.com/developers

- Create a file called .env in the project root directory 
- Paste the following template into it:
- `VITE_WEATHER_KEY=YOUR_ACCESS_KEY`
- `VITE_BACKGROUND_KEY=YOUR_ACCESS_KEY`
- Replace YOUR_ACCESS_KEY with it's respective Weather or Background API key.

- Start the project by running the following command: `npm run dev`
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

## Reflections On Code Quality

### Introduction
This section contains my personal reflections regarding the strengths & weaknesses. Which in turn will help me learn and improve my code quality.

### Strengths
This project separates each function into their individual module for the javascripts. For example, I have my fetching, displaying, filtering and anything regarding the weather logic in weather.js. This type of structuring, I believe creates very organized file paths, easily fixable in case of bugs and or if it needs refinement in the future. I inturn import all these modules to main.js which is works like a central hub all the jabvacript files connect to before being used on the webpage. I have created a similiar system for the style files aswell.

Another strenght i believe this project utilizes is loop iterations such as for and foreach loops. By using these, I can create very similar functions that basically do the same thing and just change the values for each iteration. This gives the code better readability and makes it more concise and flexible. 

I tried to shorten my code as much as possible. An example of this is this line in my dogs.js file: `let url = breed === 'All' ? 'https://dog.ceo/api/breeds/image/random' : https://dog.ceo/api/breed/${breed}/images/random;`. Firstly it defines the variable `"url"`, says that `"url" = "breed"` which is a variable from another function. The `"breed"` variable consists of a option between all dog breeds and `"All"`. The next step is to check if breed has the value of `"All"`, if it does it says that the url is `https://dog.ceo/api/breeds/image/random` and if it is not, the url is `https://dog.ceo/api/breed/${breed}/images/random;` and inputs the selected breed type into it. In summary it checks the input and switches between the two URL to make use of the one that works for that specific input. This does basically the same thing as an `"if"` block but more concise and cleaner.

### Weaknesses
I think my code could have been more modular and reusable by utilizing loops and building more dynamic code. Using loops not only helps in reducing redundancys but also enhances code scalability.

All my hardcoded values and elements are also weakesses in my code. I would have been better for every HTML element to be dynamic. An example for this is if want to see the full weeks weather, instead of just three days. To make that change i would have to manually rewrite the full HTML code for weather container. But if i made it dynamic and flexible from the start. I could change it by just changing a single value.

I also think my error handeling can be improved. By always giving users load signs, message errors or telling them what exactly went wrong. For example, I have no error handeling if the user denis the geolocation request.

### Conclusion
In the future I will try to utilize my skills in structuring and organizing the files. I will also learn from this project and attempt to write flexible and dynamic code that is easily modifiable with good readability.

## Contact Information
- Github: https://github.com/L-Lifbom
