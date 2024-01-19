import {} from "../modules/background.js";
import {} from "../modules/clock.js";
import {} from "../modules/dogs.js";
import {} from "../modules/quicklinks.js";
import {} from "../modules/weather.js";

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

// Localstorage for note textarea
let note = document.querySelector('.note')

const savedNote = localStorage.getItem('note');
if (savedNote) {
    note.value = savedNote
}

function createNewNote() {
    let newNote = note.value;
    localStorage.setItem('note', newNote);
}

note.addEventListener('input', createNewNote);