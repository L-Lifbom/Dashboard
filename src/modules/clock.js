let clock = document.querySelector('.clock');

export function displayClock() {
    let saveDate = new Date();

    function addLeadingZero(num) {
        return num < 10 ? '0' + num : num;
    }

    let formattedTime = addLeadingZero(saveDate.getHours()) + ':' + addLeadingZero(saveDate.getMinutes()) + ':' + addLeadingZero(saveDate.getSeconds());
    let formattedDate = addLeadingZero(saveDate.getDate()) + '-' + addLeadingZero(saveDate.getMonth() + 1) + '-' + saveDate.getFullYear();

    let clockHTML = 
    `<p class="time">${formattedTime}</p>
    <p class="date">${formattedDate}</p>`;
    clock.innerHTML = clockHTML;
}

displayClock()
setInterval(displayClock, 1000);