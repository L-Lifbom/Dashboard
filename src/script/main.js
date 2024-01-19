import {} from "../modules/clock.js";
import {} from "../modules/quicklinks.js";
import {} from "../modules/weather.js";
import {} from "../modules/background.js";

let headerTitle = document.querySelector('.header-title');

const savedTitle = localStorage.getItem('headerTitle');
if (savedTitle) {
    headerTitle.value = savedTitle;
}

function createNewTitle() {
    let newTitle = headerTitle.value;
    localStorage.setItem('headerTitle', newTitle);
}

headerTitle.addEventListener('input' , createNewTitle);