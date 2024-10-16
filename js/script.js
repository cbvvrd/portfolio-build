// Behaviour of buttons to open the modal boxes for portfolio projects //

// const infoButton1 = document.querySelector("#more-info-1");
// const infoButton2 = document.querySelector("#more-info-2");
// const infoButton3 = document.querySelector("#more-info-3");

// const portfolio1Large = document.querySelector(".portfolio-1-large");
// const portfolio2Large = document.querySelector(".portfolio-2-large");
// const portfolio3Large = document.querySelector(".portfolio-3-large");



// infoButton1.addEventListener('click', () => {
//     portfolio1Large.classList.toggle('visible');
// })

// infoButton2.addEventListener('click', () => {
//     portfolio2Large.classList.toggle('visible');
// })

// infoButton3.addEventListener('click', () => {
//     portfolio3Large.classList.toggle('visible');
// })



// Getting portfolio data from JSON file //
fetch('portfolio.json')
    .then(res => res.json())
    .then(data => {

        const portfolioGallery = document.querySelector(".portfolio-grid");

        data.projects.forEach(project => {
            
            portfolioGallery.innerHTML += `
                <div class="${project.id}">
                    <img src="${project.img}" alt="a webpage I have designed">
                    <div class="portfolio-info">
                        <button id="${project.button}">Info</button>
                        <a href="${project.site_link}" target="_blank">Live site</a>
                        <a href="${project.github_link}" target="_blank"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div> 
            `



        })
        
   
        


      
  

    })