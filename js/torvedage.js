const effect = document.querySelector(".effect")
const banner = document.querySelector(".banner")

const torveObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        effect.classList.toggle("slide-in", !entry.isIntersecting)
    })
},{
    threshold: ".8",
})

torveObs.observe(banner)