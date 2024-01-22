// Import functions from specified module files
import {} from "../modules/background.js";
import {} from "../modules/clock.js";
import {} from "../modules/dogs.js";
import {} from "../modules/quicklinks.js";
import {} from "../modules/weather.js";

// Manage the help-window: open and close functionality
const helpWindow = document.querySelector('.help-window');
const openHelp = document.querySelector('.help-btn');
const closeHelp = document.querySelector('.help-close');

// Open the help window
openHelp.addEventListener('click', () => {
    helpWindow.showModal();
});

// Close the help window
closeHelp.addEventListener('click', () => {
    helpWindow.close();
});

// Header title local storage management
let headerTitle = document.querySelector('.header-title');
const savedTitle = localStorage.getItem('headerTitle');
if (savedTitle) {
    headerTitle.value = savedTitle;
}

// Save a new header title to local storage
function createNewTitle() {
    let newTitle = headerTitle.value;
    localStorage.setItem('headerTitle', newTitle);
}
headerTitle.addEventListener('input' , createNewTitle);

// Notes textarea local storage management
let note = document.querySelector('.note');
const savedNote = localStorage.getItem('note');
if (savedNote) {
    note.value = savedNote;
}

// Save a new note to local storage
function createNewNote() {
    let newNote = note.value;
    localStorage.setItem('note', newNote);
}
note.addEventListener('input', createNewNote);