let currentIndex = 0;
const prev = document.querySelector("#prev-image")
const next = document.querySelector("#next-image")
const images = document.querySelector(".image-list")

prev.addEventListener("click", () => {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = images.children.length;
    }
    console.log(currentIndex)
})
next.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex > images.children.length) {
        currentIndex = 0;
    }
    console.log(currentIndex)
})