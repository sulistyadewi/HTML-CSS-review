
let menuBar = document.querySelector("#menuBar")
let menuMobile = document.querySelector("#menuMobile")

menuBar.addEventListener("click", function(){
    menuMobile.classList.toggle("top-52")
    menuMobile.classList.toggle("top-12")
})