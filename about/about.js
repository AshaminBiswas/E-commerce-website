const menuButton = document.getElementById("menu-button")
const navBar = document.getElementById("navbar")
const closeButton = document.getElementById("close")

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


gsap.from(" .stagger",{
    x:-200,
    opacity:0,
    delay:.2,
    duration:.8,
    stagger:1

})

gsap.from(".about-rating",{
    y:200,
    opacity:0,
    delay:1.6,
    duration:.8,
    stagger:1

})

gsap.from(".wwa .stagger1",{
    x:200,
    opacity:0,
    delay:.2,
    duration:.8,
    stagger:1

})