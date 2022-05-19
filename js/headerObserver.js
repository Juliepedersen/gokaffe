const options = {
    rootMargin: "-100px"
}
const headerObs = new IntersectionObserver( entries => {
    entries.forEach(entry => {  
        if (entry.isIntersecting) {
            document.querySelector("header").classList.remove("hero-nav")
        }
    })
}, options)

document.querySelectorAll("body").forEach(element => {
    headerObs.observe(element)
})