let allLinks = [];

const addLink = document.querySelector('.addlink-btn');
let linkList = document.querySelector('.link-list');

function newLink () {
    let linkTitle = prompt("Enter title forn new quicklink.");

    if (!linkTitle) {
        alert("Quicklink creation canceled or not entered correctly.");
        return;
    }

    let linkUrl = prompt("Type your website url using only 'example.com'")

    if (!linkUrl) {
        alert("Quicklink creation canceled or not entered correctly.")
        return
    }

    allLinks.push({
        title: linkTitle, 
        url: linkUrl
    });

    let linkHTML = ""
    allLinks.forEach((link) => {
        let faviconUrl = `https://www.google.com/s2/favicons?sz=32&domain_url=${link.url}`;
        linkHTML += 
        `<div class="link">
        <img src="${faviconUrl}" alt="">
        <a href="http://www.${link.url}" target="_blank">${link.title}</a>
        <i class="fa-solid fa-circle-minus"></i>
        </div>`
    })


    linkList.innerHTML = linkHTML
    console.log(allLinks);
}

function removeLink(event) {
    if (event.target.classList.contains('fa-circle-minus')) {

    }
}



addLink.addEventListener("click", newLink)
linkList.addEventListener("click", removeLink);

