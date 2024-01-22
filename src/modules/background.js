// Imports axios for HTTP fetch requests
import axios from "axios";

// Selecting DOM elements
const backgroundBtn = document.querySelector('.background-btn');
let body = document.querySelector('body');
let categoryInput = document.querySelector('.category-input');
let category = "";

// Asynchronous function to fetch random background image with or without specific category
async function fetchBackground() {
  // Retrieves API key from .env variables
  const apiKey = import.meta.env.VITE_BACKGROUND_KEY;
  // API url used to fetch random photos
  const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&orientation=landscape&query=${encodeURIComponent(category)}`;
  try {
    // Uses GET request to Unsplash API
    const response = await axios.get(url);
    console.log("Background successfully fetched.");
    return response.data;
  } catch (error) {
    // Logs error and resets input box on fetch failure
    console.error("Background was not fetched: " + error);
    categoryInput.style.backgroundColor = '#cc0000';
    categoryInput.value = "";
    categoryInput.placeholder = "Error";
  }
}

// Function to update background image with the new fetched image
async function updateBackground() {
  // Initiates the fetchBackground function and waits for the data to return
  const backgroundData = await fetchBackground();
  // Check if data is valid and then updates background image
  if (backgroundData && backgroundData.urls && backgroundData.urls.full) {
    const imgUrl = backgroundData.urls.full;
    body.style.backgroundImage = `url(${imgUrl})`;
  }
}

// Event listener on a button that initiates updateBackground function when clicked
backgroundBtn.addEventListener('click' , updateBackground);

// Event listener on category input that initiates updateBackground function when 'Enter' key is clicked
categoryInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    updateBackground();
  }
})

// Event listener that updates the variable 'category' and resets the styling of input field
categoryInput.addEventListener('input', () => {
  category = categoryInput.value;
  categoryInput.style.backgroundColor = 'var(--clr-background-3)';
  categoryInput.placeholder = "Choose Category";
});

// Event listener triggered by page reload that resets the input field value and initiates updateBackground function
/* window.addEventListener("DOMContentLoaded", () => {
  categoryInput.value = "";
  updateBackground();
}); */