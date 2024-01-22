// Imports axios for HTTP fetch requests
import axios from "axios";

// Selecting DOM elements
const dogsBtn = document.querySelector('.dogs-btn');
let dogs = document.querySelector('.dogs');

// Asynchronous function to fetch random pictures of dogs
async function fetchDogs() {
      // API url used to fetch random photos
    const url = 'https://dog.ceo/api/breeds/image/random';

    try {
        // Uses GET request to DogCEO API
        const response = await axios.get(url);
        console.log("Dog successfully fetched.");
        return response.data;
    } catch (error) {
        // Logs error
        console.error("Dog was not fetched: " + error);
        // Updates the dogs container with error message
        let dogHtml = 
        `<h4>Attempt to fetch dogs was unsuccessful <i class="fa-regular fa-face-frown"</h4>`
        dogs.innerHTML = dogHtml;
    }
}

// Asynchronous function to update DOM with new dog image
async function updateDogs() {
    // Displays loading spinner while image is being fetching
    let dogHtml = `<i class="fa-solid fa-spinner dogs-spinner"></i>`;
    dogs.innerHTML = dogHtml;

    // Initiates fetch of dog image data and waits for response
    const dogData = await fetchDogs();
    // Extracts image URL
    const dogImg = dogData.message;
    
    // Displays the dog container with the fetched dog image 
    dogHtml = 
    `<img src="${dogImg}">`;
    dogs.innerHTML = dogHtml;
}

// Event listener on a button that initiates updateDogs function when clicked
dogsBtn.addEventListener('click' , updateDogs);

// Event listener triggered by page reload that initiates updateDogs function 
window.addEventListener("DOMContentLoaded", () => {
    updateDogs();
  });