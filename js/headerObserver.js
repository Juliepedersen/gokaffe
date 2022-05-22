const hero = document.querySelector(".hero")
const header = document.querySelector("header")

const headerObs = new IntersectionObserver(entries => 
    header.classList.toggle('hero-nav', entries[0].isIntersecting),
{threshold: "0.3"})

headerObs.observe(hero)