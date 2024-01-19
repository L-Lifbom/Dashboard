import axios from "axios";

const dogsBtn = document.querySelector('.dogs-btn');
let dogs = document.querySelector('.dogs')

async function fetchDogs() {
    const apiKey = import.meta.env.VITE_DOG_KEY;
    const url = `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${apiKey}`;
    try {
        const response = await axios.get(url);
        console.log("Dogs successfully fetched.");
        return response.data
    } catch (error) {
        console.log("Dogs were not fetched: " + error);
    }
}

async function updateDogs() {
    const dogData = await fetchDogs();
    console.log("här");
    const dogImg = dogData[0].url;
    
    let dogHtml = 
    `<img src="${dogImg}" alt="Image of dogs">`;

    dogs.innerHTML = dogHtml
}

dogsBtn.addEventListener('click' , updateDogs);

window.addEventListener("DOMContentLoaded", () => {
    updateDogs();
  });