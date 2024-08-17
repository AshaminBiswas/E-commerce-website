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



window.addEventListener("wheel", (e) =>{
    if (e.deltaY >0) {
        gsap.to(".anim",{
            transform:"translateX(-200%)",
            delay:1,
            duration:4,
            repeat:-1,
            ease:"none",
        })

        gsap.to(".anim div i",{
            rotate:180
        })
    }else{
        gsap.to(".anim",{
            transform:"translateX(0%)",
            delay:1,
            duration:4,
            repeat:-1,
            ease:"none",
        })

        gsap.to(".anim div i",{
            rotate:0
        })
    }
    
})

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


gsap.from("#featured-products .products-fe",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#featured-products .products-fe",
        scroller:"body",
        start:"top 105%",
        end:"top 50%",
        scrub:2
    }
})

gsap.from("#pages a",{
    y:100,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"#pages a",
        scroller:"body",
        start:"top 100%",
        end:"top 80%",
        scrub:2
    }
})

gsap.from("#shop-video video",{
    y:120,
    opacity:0,
    scrollTrigger:{
        trigger:"#shop-video video",
        scroller:"body",
        start:"top 100%",
        end:"top 60%",
        scrub:2
    }
})

 
gsap.from("#signup .signup-text",{
    x:-700,
    opacity:0,
    scrollTrigger:{
        trigger:"#signup .signup-text",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 65%",
        scrub:2,
    }
})

gsap.from("#signup .signup-form",{
    x:700,
    opacity:0,
    scrollTrigger:{
        trigger:"#signup .signup-form",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 65%",
        scrub:2,
    }
})

gsap.from("#footer #ftc1",{
    x:-300,
    opacity:0,
    scrollTrigger:{
        trigger:"#footer #ftc1 ",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2,
    }
})

gsap.from("#footer #ftc2",{
    x:300,
    opacity:0,
    scrollTrigger:{
        trigger:"#footer #ftc2 ",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2,
    }
})

gsap.from("#footer #ftc3",{
    y:200,
    opacity:0,
    scrollTrigger:{
        trigger:"#footer #ftc3 ",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 80%",
        scrub:2,
    }
})

gsap.from(".copy h6",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:".copy h6",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 96%",
        scrub:2,
    }
})