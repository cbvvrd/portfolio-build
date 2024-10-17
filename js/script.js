const menuButton = document.querySelector(".menu-button");
const menuLinks = document.querySelector("header .links");


menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("visible")
})




// Getting portfolio data from JSON file //
fetch('portfolio.json')
    .then(res => res.json())
    .then(data => {
        const portfolioGallery = document.querySelector(".portfolio-grid");
        const portfolioModals = document.querySelector(".portfolio-modals");


        // insert portfolio gallery with data from JSON //
        data.projects.forEach(project => {
            
            portfolioGallery.innerHTML += `
                <div class="${project.id}">
                    <h3>${project.name}</h3>
                    <img src="${project.img}" alt="${project.alt_text}">
                    <div class="portfolio-info">
                        <button id="${project.open_button}">Info</button>
                        <a href="${project.site_link}" class="site-link" target="_blank">Live site</a>
                        <a href="${project.github_link}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div> 
            `

        // insert modal boxes with data from JSON //

            portfolioModals.innerHTML += `
                <div class="${project.modal_box}">
                    <div class="modal-top">
                        <button id="${project.close_button}"><i class="fa-solid fa-xmark"></i></button>
                        <img src="${project.img}" alt="larger image of the webpage">
                    </div>
                    <p class="project-info">${project.info}</p>
                    <div class="modal-links">
                        <a href="${project.site_link}" target="_blank">Live site</a>
                        <a href="${project.github_link}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>      
            `
        })
        
        // onClick function to "more info" buttons - open modals //
        
        const portfolio1Large = document.querySelector(".portfolio-1-large");
        const portfolio2Large = document.querySelector(".portfolio-2-large");
        const portfolio3Large = document.querySelector(".portfolio-3-large");

        document.querySelector("#more-info-1").addEventListener('click', () => {
            portfolio1Large.classList.toggle('visible');
        })
        document.querySelector("#more-info-2").addEventListener('click', () => {
            portfolio2Large.classList.toggle('visible');
        })
        document.querySelector("#more-info-3").addEventListener('click', () => {
            portfolio3Large.classList.toggle('visible');
        })

        // onClick funciton to close modals //
        document.querySelector("#close-window-1").addEventListener('click', () => {
            portfolio1Large.classList.remove('visible');
        })
        document.querySelector("#close-window-2").addEventListener('click', () => {
            portfolio2Large.classList.remove('visible');
        })
        document.querySelector("#close-window-3").addEventListener('click', () => {
            portfolio3Large.classList.remove('visible');
        })


    })