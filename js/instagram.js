let currentIndex = 0;
const prev = document.querySelector("#prev-image")
const next = document.querySelector("#next-image")
const images = document.querySelector(".image-list")
const slide = document.querySelectorAll("[data-index]")

prev.addEventListener("click", () => {
    currentIndex--
    if(currentIndex < 0) {
        currentIndex = images.children.length - 1
    }
    // console.log(images.children[currentIndex])
    for(let i = 0; i < images.children.length; i++){
        console.log(images.children[i+1])
    }
    console.log(currentIndex)
})
next.addEventListener("click", () => {
    if(currentIndex >= images.children.length) {
        currentIndex = 0
    }
    for(let i = 0; i < images.children.length; i++){
        images.children[i].setAttribute("data-index", `${i + 1}`)
        console.log(images.children[i])
    }
    currentIndex++
    // console.log(currentIndex)
})