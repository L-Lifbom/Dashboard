let allLinks = JSON.parse(localStorage.getItem('allLinks')) || [];

const addLink = document.querySelector('.addlink-btn');
let linkList = document.querySelector('.link-list');

function displayLinks() {
    let linkHTML = "";
    allLinks.forEach((link, index) => {
        let faviconUrl = `https://www.google.com/s2/favicons?sz=32&domain_url=${link.url}`;
        linkHTML += 
        `<div class="link" data-index="${index}">
        <img src="${faviconUrl}" alt="">
        <a href="http://www.${link.url}" target="_blank">${link.title}</a>
        <i class="fa-solid fa-circle-minus" title="Remove"></i>
        </div>`;
    });

    linkList.innerHTML = linkHTML;
}

function newLink () {
    let linkTitle = prompt("Enter title for quicklink.");

    if (!linkTitle) {
        alert("Quicklink creation canceled or not entered correctly.");
        return;
    }

    let linkUrl = prompt("Type website url using only 'example.com'.");

    if (!linkUrl) {
        alert("Quicklink creation canceled or not entered correctly.");
        return;
    }

    allLinks.push({
        title: linkTitle, 
        url: linkUrl
    });

    localStorage.setItem('allLinks', JSON.stringify(allLinks));
    displayLinks();

    console.log(allLinks);
}

function removeLink(event) {
    if (event.target.classList.contains('fa-circle-minus')) {
        const index = event.target.parentElement.getAttribute('data-index');

        if (index) {
            allLinks.splice(index, 1);
            localStorage.setItem('allLinks', JSON.stringify(allLinks));
            displayLinks();
        }
    }
}

addLink.addEventListener("click", newLink);
linkList.addEventListener("click", removeLink);

displayLinks();