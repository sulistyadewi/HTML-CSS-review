
let menuBar = document.querySelector("#menuBar")
let menuMobile = document.querySelector("#menuMobile")

menuBar.addEventListener("click", function(){
    menuMobile.classList.toggle("-left-[800px]")
    menuMobile.classList.toggle("left-0")
})