import axios from "axios";

const backgroundBtn = document.querySelector('.background-btn');
let body = document.querySelector('body');
let categoryInput = document.querySelector('.category-input');
let category = "";

async function fetchBackground() {
  const apiKey = import.meta.env.VITE_BACKGROUND_KEY;
  const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&orientation=landscape&query=${encodeURIComponent(category)}`;
  try {
    const response = await axios.get(url);
    console.log("Background successfully fetched.");
    return response.data;
  } catch (error) {
    console.error("Background was not fetched: " + error);
    categoryInput.style.backgroundColor = '#cc0000';
    categoryInput.value = "";
    categoryInput.placeholder = "Error";
  }
}

async function updateBackground() {
  const backgroundData = await fetchBackground();
  if (backgroundData && backgroundData.urls && backgroundData.urls.full) {
    const imgUrl = backgroundData.urls.full;
    body.style.backgroundImage = `url(${imgUrl})`;
  }
}

backgroundBtn.addEventListener('click' , updateBackground);

categoryInput.addEventListener('input', () => {
  category = categoryInput.value
  categoryInput.style.backgroundColor = 'var(--clr-background-3)';
  categoryInput.placeholder = "Choose Category";
});

/* window.addEventListener("DOMContentLoaded", () => {
  categoryInput.value = "";
  updateBackground();
}); */