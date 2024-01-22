// Selecting DOM elements
let clock = document.querySelector('.clock');

// Function to display time and date
function displayClock() {
    // Saves the current time and date in a variable 'saveDate'
    let saveDate = new Date();

    // Helper function that adds a 0 on numbers less than 10
    function addLeadingZero(num) {
        return num < 10 ? '0' + num : num;
    }

    // Formats the time data for better readability
    let formattedTime = addLeadingZero(saveDate.getHours()) + ':' + addLeadingZero(saveDate.getMinutes()) + ':' + addLeadingZero(saveDate.getSeconds());

    // Formats the date data for better readability
    let formattedDate = addLeadingZero(saveDate.getDate()) + '-' + addLeadingZero(saveDate.getMonth() + 1) + '-' + saveDate.getFullYear();

    // Creates HTML syntax for time and date
    let clockHTML = 
    `<p class="time">${formattedTime}</p>
    <p class="date">${formattedDate}</p>`;

    // Inputs the time and date into HTML file
    clock.innerHTML = clockHTML;
}

// Initial call to display clock
displayClock();

// Sets a interval that restarts the displayClock function every second
setInterval(displayClock, 1000);