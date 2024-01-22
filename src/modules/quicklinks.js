// Retrieve saved links from localStorage or initialize an empty array
let allLinks = JSON.parse(localStorage.getItem('allLinks')) || [];

// Selecting DOM elements
const addLink = document.querySelector('.addlink-btn');
let linkList = document.querySelector('.link-list');

// Function to display all quicklinks in the linkList container
function displayLinks() {
    let linkHTML = "";
    // Loop through each link and creates HTML syntax 
    allLinks.forEach((link, index) => {
        let faviconUrl = `https://www.google.com/s2/favicons?sz=32&domain_url=${link.url}`;
        linkHTML += 
        `<div class="link" data-index="${index}">
        <img src="${faviconUrl}" alt="">
        <a href="http://www.${link.url}" target="_blank">${link.title}</a>
        <i class="fa-solid fa-circle-minus" title="Remove"></i>
        </div>`;
    });

    // Displays the linkHTML inside the linkList container
    linkList.innerHTML = linkHTML;
}

// Function to create and save new links
function newLink () {
    // Prompt user for quicklink title
    let linkTitle = prompt("Enter title for quicklink.");

    // Validate that input exists
    if (!linkTitle) {
        alert("Quicklink creation canceled or not entered correctly.");
        return;
    }

    // Prompt user for quicklink URL 
    let linkUrl = prompt("Type website url using only 'example.com'.");

    // Validate that input exists
    if (!linkUrl) {
        alert("Quicklink creation canceled or not entered correctly.");
        return;
    }

    // Adds new link to allLinks array
    allLinks.push({
        title: linkTitle, 
        url: linkUrl
    });

    // Update the allLinks array in localStorage
    localStorage.setItem('allLinks', JSON.stringify(allLinks));
    // Calls function to display updated link list
    displayLinks();
}

// Function to remove a link
function removeLink(event) {
    // Checks if element clicked is the remove button
    if (event.target.classList.contains('fa-circle-minus')) {
        // Locates the index number of the link clicked 
        const index = event.target.parentElement.getAttribute('data-index');

        // Remove the link if index is valid
        if (index) {
            allLinks.splice(index, 1);
            // Update the allLinks array in localStorage
            localStorage.setItem('allLinks', JSON.stringify(allLinks));
            // Calls function to display updated link list
            displayLinks();
        }
    }
}

// Event listener to initiate newLink function when addLink button is clicked
addLink.addEventListener("click", newLink);
// Event listener to initiate removeLink function when a linkList element is clicked
linkList.addEventListener("click", removeLink);

// Initial call to display links
displayLinks();