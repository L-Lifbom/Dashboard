import axios from "axios";

const dogsBtn = document.querySelector('.dogs-btn');
let dogs = document.querySelector('.dogs')

async function fetchDogs() {
/*     const apiKey = import.meta.env.VITE_DOG_KEY; */
/*     const url = `https://api.thedogapi.com/v1/images/search?limit=10&api_key=${apiKey}`; */
    const url = 'https://dog.ceo/api/breeds/image/random';
    try {
        const response = await axios.get(url);
        console.log("Dog successfully fetched.");
        return response.data
    } catch (error) {
        console.log("Dog was not fetched: " + error);
        let dogHtml = 
        `<h4>Attempt to fetch dogs was unsuccessful <i class="fa-regular fa-face-frown"</h4>`
        dogs.innerHTML = dogHtml
    }
}

async function updateDogs() {
    const dogData = await fetchDogs();
    const dogImg = dogData.message;
    
    let dogHtml = 
    `<img src="${dogImg}" alt="Image of dogs">`;

    dogs.innerHTML = dogHtml
}

dogsBtn.addEventListener('click' , updateDogs);

window.addEventListener("DOMContentLoaded", () => {
    updateDogs();
  });