import axios from "axios";

const backgroundBtn = document.querySelector('.background-btn')
let body = document.querySelector('body')
let category = "";

async function fetchBackground() {
  const apiKey = import.meta.env.VITE_BACKGROUND_KEY;
  const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&orientation=landscape&query=${encodeURIComponent(category)}`;
  try {
    const response = await axios.get(url);
    console.log("Background successfully fetched.");
    return response.data;
  } catch (error) {
    console.log("Background was not fetched: " + error);
  }
}

async function updateBackground() {
  const backgroundData = await fetchBackground();
  const imgUrl = backgroundData.urls.full;
  body.style.backgroundImage = `url(${imgUrl})`
}

backgroundBtn.addEventListener('click' , updateBackground);

/* window.addEventListener("DOMContentLoaded", () => {
  updateBackground()
}); */