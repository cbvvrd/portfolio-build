// Behaviour of buttons to open the modal boxes for portfolio projects //

const infoButton1 = document.querySelector("#more-info-1");
const infoButton2 = document.querySelector("#more-info-2");
const infoButton3 = document.querySelector("#more-info-3");

const portfolio1Large = document.querySelector(".portfolio-1-large");
const portfolio2Large = document.querySelector(".portfolio-2-large");
const portfolio3Large = document.querySelector(".portfolio-3-large");

infoButton1.addEventListener('click', () => {
    portfolio1Large.classList.toggle('visible');
})

infoButton2.addEventListener('click', () => {
    portfolio2Large.classList.toggle('visible');
})

infoButton3.addEventListener('click', () => {
    portfolio3Large.classList.toggle('visible');
})

// Getting portfolio data from JSON file //
fetch('portfolio.json')
    .then(res => res.json())
    .then(data => {
        const portfolio1_img = document.querySelector("#project-1-img")
        console.log(portfolio1_img)
        portfolio1_img.innerHTML = `<img src="images/forest.jpg" alt="a webpage I have designed">`
  

        })