// Behaviour of buttons to open the modal boxes for portfolio projects //
const infoButton1 = document.querySelector("#more-info-1");
const infoButton2 = document.querySelector("#more-info-2");
const infoButton3 = document.querySelector("#more-info-3");

const portfolio1 = document.querySelector(".portfolio-1-large");
const portfolio2 = document.querySelector(".portfolio-2-large");
const portfolio3 = document.querySelector(".portfolio-3-large");

infoButton1.addEventListener('click', () => {
    portfolio1.classList.toggle('visible');
})

infoButton2.addEventListener('click', () => {
    portfolio2.classList.toggle('visible');
})

infoButton3.addEventListener('click', () => {
    portfolio3.classList.toggle('visible');
})

// Getting portfolio data from JSON file //
fetch('portfolio.json')
    .then(res => res.json())
    .then(data =>
        console.log(data)
    );