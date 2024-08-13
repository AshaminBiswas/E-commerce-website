

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
    x:-100,
    duration:1,
    opacity:0,
    
})

tl1.from("#navbar li",{
    y:-25,
    duration:.7,
    opacity:0,
    stagger:0.3
})

gsap.from("#hero-section .main-title",{
    y:-200,
    duration:1.5,
    delay:1.5,
    opacity:0
})

gsap.from("#hero-section h1",{
    x:-200,
    duration:1.5,
    delay:1.5,
    opacity:0
})

gsap.from("#hero-section h2",{
    x:200,
    duration:1.5,
    delay:1.5,
    opacity:0
})

gsap.from("#hero-section p, .hero-btn",{
    y:200,
    duration:1.5,
    delay:1.5,
    opacity:0
})



gsap.from("#card-service-box ",{
    y:200,
    opacity:0,
    stagger:.5,
    scale:.3,
    scrollTrigger:{
        trigger:"#card-service-box",
        scroller:"body",
        // markers:true,
        start:"top 120%",
        scrub:2,
        end:"top 70%"
    }
})

gsap.from("#card-service-box h6 ",{
    y:200,
    opacity:0,
    stagger:.5,
    scale:.5,
    scrollTrigger:{
        trigger:"#card-service-box",
        scroller:"body",
        // markers:true,
        start:"top 110%",
        scrub:3,
        end:"top 60%"
    }
})

gsap.to("#enhance p",{
    transform:"translate(-87%)",
    scrollTrigger:{
        trigger:"#enhance",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})


gsap.from("#videos video",{
    y:100,
    opacity:0,
    scale:.5,
    scrollTrigger:{
        trigger:"#videos video",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 62%",
        scrub:2,
    }
})


gsap.from("#featured-products .fp-title, .fp-tag",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:"#featured-products .fp-title, fp-tag",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 90%",
        scrub:2,
        
    }
})

gsap.from("#featured-products .products-fe",{
    y:100,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#featured-products",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 20%",
        scrub:3,
        
    }
})


gsap.from("#explore",{
    y:100,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#explore",
        scroller:"body",
        // markers:true,
        start:"top 110%",
        end:"top 92%",
        scrub:3,
        
    }
})

gsap.from("#explore h5",{
    y:-100,
    opacity:0,
    scrollTrigger:{
        trigger:"#explore h5",
        scroller:"body",
        // markers:true,
        start:"top 98%",
        end:"top 90%",
        scrub:3,
        
    }
})

gsap.from("#explore h2",{
    x:100,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#explore button",
        scroller:"body",
        // markers:true,
        start:"top 98%",
        end:"top 90%",
        scrub:3,
        
    }
})

gsap.from(".featured-products #products-fe2 .product-fe-card2 ",{
    y:100,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:".featured-products",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 20%",
        scrub:3,
        
    }
})

gsap.from("#explore button",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#explore button",
        scroller:"body",
        // markers:true,
        start:"top 98%",
        end:"top 90%",
        scrub:3,
        
    }
})

gsap.from("#featured-products .fp-title2, .fp-tag2",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:"#featured-products .fp-title2, fp-tag2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 90%",
        scrub:2,
        
    }
})

gsap.from("#sale-video p",{
    scale:0,
    rotate:360,
    color:"red",
    scrollTrigger:{
        trigger:"#sale-video p",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2,
    }
})


gsap.from("#sale-video video",{
    y:100,
    scale:.5,
    scrollTrigger:{
        trigger:"#sale-video video",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2,
    }
})


gsap.from("#banner .banner-box1",{
    x:-700,
    opacity:0,
    scrollTrigger:{
        trigger:"#banner .banner-box1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 40%",
        scrub:2,
    }
})

gsap.from("#banner .banner-box2",{
    x:700,
    opacity:0,
    scrollTrigger:{
        trigger:"#banner .banner-box2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 40%",
        scrub:2,
    }
})

gsap.from("#banner1 .banner1-box1",{
    x:-300,
    scale:.5,
    scrollTrigger:{
        trigger:"#banner1 .banner1-box1",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2,
    }
})

gsap.from("#banner1 .banner1-box2",{
    y:300,
    scale:.5,
    scrollTrigger:{
        trigger:"#banner1 .banner1-box",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2,
    }
})


gsap.from("#banner1 .banner1-box3",{
    x:300,
    scale:.5,
    scrollTrigger:{
        trigger:"#banner1 .banner1-box3",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"top 60%",
        scrub:2,
    }
})

// gsap.from("#signup ",{
//     scale:0,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#signup ",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

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
