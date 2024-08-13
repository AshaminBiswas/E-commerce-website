const menuButton = document.getElementById("menu-button")
const navBar = document.getElementById("navbar")
const closeButton = document.getElementById("close")

function menuSlid() {
    if (menuButton) {
        menuButton.addEventListener("click", function (){
            navBar.classList.add("active")
        })
    }
    
    if (closeButton) {
        closeButton.addEventListener("click", function (){
            navBar.classList.remove("active")
        })
    }
}
menuSlid()

var tl1  = gsap.timeline()

tl1.from("#logo",{
    y:-25,
    duration:.7,
    opacity:0,
    
})

tl1.from("#navbar li",{
    y:-25,
    duration:.7,
    opacity:0,
    stagger:0.3
})


