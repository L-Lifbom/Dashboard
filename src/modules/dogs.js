import axios from "axios";

const dogsBtn = document.querySelector('.dogs-btn');
let dogs = document.querySelector('.dogs');

async function fetchDogs() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await axios.get(url);
        console.log("Dog successfully fetched.");
        return response.data
    } catch (error) {
        console.error("Dog was not fetched: " + error);
        let dogHtml = 
        `<h4>Attempt to fetch dogs was unsuccessful <i class="fa-regular fa-face-frown"</h4>`
        dogs.innerHTML = dogHtml
    }
}

async function updateDogs() {
    let dogHtml = `<i class="fa-solid fa-spinner"></i>`;
    dogs.innerHTML = dogHtml;

    const dogData = await fetchDogs();
    const dogImg = dogData.message;
    
    dogHtml = 
    `<img src="${dogImg}">`;

    dogs.innerHTML = dogHtml;
}

dogsBtn.addEventListener('click' , updateDogs);

window.addEventListener("DOMContentLoaded", () => {
    updateDogs();
  });