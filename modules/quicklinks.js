let allLinks = [];

const addLink = document.querySelector('.addlink-btn')
let linkList = document.querySelector('.link-list');

function newLink () {
    let linkTitle = prompt("Please enter a title for the quicklink.")

    if (linkTitle == null || linkTitle.trim() === "") {
        alert("Quicklink creation was canceled or was not entered correctly.")
        return
    }

    let linkUrl = prompt("Please type the website address as 'example.com' without 'www' or 'https://'.")

    if (linkUrl == null || linkUrl.trim === "") {
        alert("Quicklink creation was canceled or was not entered correctly.")
        return
    }

    allLinks.push({
        title: linkTitle, 
        url: linkUrl
    });

    let linkHTML = ""
    allLinks.forEach((link) => {
        linkHTML += 
        `<div class="link">
        <img src="/assets/Google-favicon.png" alt="">
        <a href="http://www.${link.url}" target="_blank">${link.title}</a>
        <i class="fa-solid fa-circle-minus"></i>
        </div>`
    })


    linkList.innerHTML = linkHTML
    console.log(allLinks);
}

function removeLink(event) {
    if (event.target.classList.contains('fa-circle-minus')) {
/*         allLinks.splice(event, 1);  */
    }
}



addLink.addEventListener("click", newLink)
linkList.addEventListener("click", removeLink);