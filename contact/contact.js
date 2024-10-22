const menuButton = document.getElementById("menu-button")
const navBar = document.getElementById("navbar")
const closeButton = document.getElementById("close")

function responsiveMenu() {
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
responsiveMenu()



// var tl1  = gsap.timeline()

// tl1.from("#logo",{
//     y:-25,
//     duration:.7,
//     opacity:0,
    
// })

// tl1.from("#navbar li",{
//     y:-25,
//     duration:.7,
//     opacity:0,
//     stagger:0.3
// })


// gsap.from("#contact h1",{
//     y:-300,
//     delay:.5,
//     opacity:0,
//     duration:1.2,

// })

// gsap.from("#contact button",{
//     y:300,
//     delay:.5,
//     opacity:0,
//     duration:1.2,

// })