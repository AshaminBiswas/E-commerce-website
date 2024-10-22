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


// gsap.from(" .stagger",{
//     x:-200,
//     opacity:0,
//     delay:.2,
//     duration:.8,
//     stagger:1

// })

// gsap.from(".about-rating",{
//     y:200,
//     opacity:0,
//     delay:1.6,
//     duration:.8,
//     stagger:1

// })

// gsap.from(".wwa .stagger1",{
//     y:150,
//     opacity:0,
//     delay:.2,
//     duration:.8,
//     stagger:1

// })


// gsap.from(".wwa-row1 .box1",{
//     x:-700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".wwa-row1 .box1",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from(".wwa-row1 .box2",{
//     x:700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".wwa-row1 .box2",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from(".stagger2",{
//     y:100,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".stagger2",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 60%",
//         scrub:2,
//     }
// })

// gsap.from(".wwa-row1 .box3",{
//     x:-700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".wwa-row1 .box3",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from(".wwa-row1 .box4",{
//     x:700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".wwa-row1 .box4",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from(".wwa-row1 .box5",{
//     x:-700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".wwa-row1 .box5",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from(".wwa-row1 .box6",{
//     x:700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".wwa-row1 .box6",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from(".wwa-row1 .box7",{
//     x:-700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".wwa-row1 .box7",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from(".wwa-row1 .box8",{
//     x:700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".wwa-row1 .box8",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })
// gsap.from( ".about-story-video .v1",{
//     x:-200,
//     opacity:0,
//     scrollTrigger:{
//         trigger: ".about-story-video .v1",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 42%",
//         scrub:1,
//     }
// })

// gsap.from( ".about-story-video .v2",{
//     y:200,
//     opacity:0,
//     scrollTrigger:{
//         trigger: ".about-story-video .v2",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 50%",
//         scrub:1,
//     }
// })

// gsap.from( ".about-story-information",{
//     x:300,
//     opacity:0,
//     scrollTrigger:{
//         trigger: ".about-story-information",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 42%",
//         scrub:1,
//     }
// })

// gsap.from( ".about-story-cards .box",{
//     y:150,
//     opacity:0,
//     stagger:.3,  
//     scrollTrigger:{
//         trigger: ".about-story-cards .box",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 60%",
//         scrub:1,
       
//     }
// })

// gsap.from( "#our-team h2",{
//     scale:0,
//     opacity:0,  
//     scrollTrigger:{
//         trigger: "#our-team h2",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 75%",
//         scrub:1,
       
//     }
// })

// gsap.from( "#our-team p",{
//     scale:0,
//     opacity:0,  
//     scrollTrigger:{
//         trigger: "#our-team p",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 75%",
//         scrub:1,
       
//     }
// })

// gsap.from( "#our-team .our-team-cards .card ",{
//     scale:0,
//     opacity:0,  
//     scrollTrigger:{
//         trigger: "#our-team .our-team-cards .card",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 61%",
//         scrub:1,
       
//     }
// })



 
 
// gsap.from("#signup .signup-text",{
//     x:-700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#signup .signup-text",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from("#signup .signup-form",{
//     x:700,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#signup .signup-form",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 65%",
//         scrub:2,
//     }
// })

// gsap.from("#footer #ftc1",{
//     x:-300,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#footer #ftc1 ",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 60%",
//         scrub:2,
//     }
// })

// gsap.from("#footer #ftc2",{
//     x:300,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#footer #ftc2 ",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 60%",
//         scrub:2,
//     }
// })

// gsap.from("#footer #ftc3",{
//     y:200,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#footer #ftc3 ",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 80%",
//         scrub:2,
//     }
// })

// gsap.from(".copy h6",{
//     scale:0,
//     opacity:0,
//     scrollTrigger:{
//         trigger:".copy h6",
//         scroller:"body",
//         // markers:true,
//         start:"top 100%",
//         end:"top 96%",
//         scrub:2,
//     }
// })