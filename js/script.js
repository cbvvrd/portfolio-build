
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
                    <img src="${project.img}" alt="${project.alt_text}">
                    <div class="portfolio-info">
                        <button id="${project.button}">Info</button>
                        <a href="${project.site_link}" target="_blank">Live site</a>
                        <a href="${project.github_link}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div> 
            `

        // insert modal boxes with data from JSON //

            portfolioModals.innerHTML += `
                <div class="${project.modal_box}">
                    <img src="${project.img}" alt="larger image of the webpage">
                    <p>${project.info}</p>
                    <a href="${project.site_link}" target="_blank">Live site</a>
                    <a href="${project.github_link}" target="_blank"><i class="fa-brands fa-github"></i></a>
                </div>      
            `
        })
        
        // adding onClick function to "more info" buttons - open modals //
        
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

    })