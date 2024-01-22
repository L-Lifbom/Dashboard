// Imports axios for HTTP fetch requests
import axios from "axios";

// Selecting DOM elements
const dogsBtn = document.querySelector('.dogs-btn');
let dogs = document.querySelector('.dogs');
let dropdownList = document.querySelector('.breeds-dropdown')

// Asynchronous function to fetch random pictures of dogs
async function fetchDogs(breed = 'All') {
    // Checks if breed is all. If it is, uses first url. If it is not, uses the second URL and inputs the breed variable
    let url = breed === 'All' ? 'https://dog.ceo/api/breeds/image/random' : `https://dog.ceo/api/breed/${breed}/images/random`;
    console.log(breed)

    try {
        // Uses GET request to DogCEO API
        const response = await axios.get(url);
        console.log("Dogs successfully fetched.");
        return response.data;
    } catch (error) {
        // Logs error
        console.error("Dog was not fetched: " + error);
        // Updates the dogs container with error message
        dogs.innerHTML = `<h4>Attempt to fetch dogs was unsuccessful <i class="fa-regular fa-face-frown"</h4>`
    }
}

// Asynchronous function to update DOM with new dog image
async function updateDogs(breed = 'All') {
    // Displays loading spinner while image is being fetching
    dogs.innerHTML = `<i class="fa-solid fa-spinner dogs-spinner"></i>`;
    
    // Initiates fetch of dog image data and waits for response
    const dogData = await fetchDogs(breed);

    // Extracts image URL
    const dogImg = dogData.message;

    // Displays the dog container with the fetched dog image 
    dogs.innerHTML = `<img src="${dogImg}">`;
}

async function fetchBreedsList() {
    // Defines url that lists all dog breeds 
    const listUrl = 'https://dog.ceo/api/breeds/list/all';

    try {
        // Uses GET request to DogCEO API
        const response = await axios.get(listUrl);
        let breeds = response.data.message;
        // Creates a HTML string for All option
        let listHtml = `<option value="All">All</option>`;

        // It iterates through each breed in the breeds object
        for (let breed in breeds) {
            // Checks if there is a sub-breed
            if (breeds[breed].length === 0) {
                // If it does not contain a sub-breed it creates string for deafult breed option
                listHtml += `<option value="${breed}">${breed}</option>`;
            } else {
                // If breeds contain a sub-breed it iterates through all of them and creates string for the sub-breeds
                breeds[breed].forEach(subBreed => {
                    listHtml += `<option value="${breed}/${subBreed}">${breed} (${subBreed})</option>`;
                });
            }
        }
        // Displays all the breeds and sub-breeds in the dropdown list
        dropdownList.innerHTML = listHtml

    } catch (error) {
        // Logs error
        console.error("Breed list was not fetched: ", error)
    }
}

// Event listener on a button that initiates updateDogs function when clicked
dogsBtn.addEventListener('click' , () => {
    updateDogs(dropdownList.value)
});

// Event listener triggered by page reload that initiates updateDogs function 
window.addEventListener("DOMContentLoaded", () => {
    updateDogs();
    fetchBreedsList()
});

// Event listener triggered by change in dropdownList that initiates updateDogs with the new value selected 
dropdownList.addEventListener('change', () => {
    updateDogs(dropdownList.value);
});