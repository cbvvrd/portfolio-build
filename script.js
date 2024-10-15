const infoButton1 = document.querySelector("#more-info-1");
const infoButton2 = document.querySelector("#more-info-2");
const infoButton3 = document.querySelector("#more-info-3");


infoButton1.addEventListener('click', () => {
    const portfolio1 = document.querySelector(".portfolio-1-large")
    portfolio1.classList.toggle('visible')
})

infoButton2.addEventListener('click', () => {
    const portfolio2 = document.querySelector(".portfolio-2-large")
    portfolio2.classList.toggle('visible')
})

infoButton3.addEventListener('click', () => {
    const portfolio3 = document.querySelector(".portfolio-3-large")
    portfolio3.classList.toggle('visible')
})


