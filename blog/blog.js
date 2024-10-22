//get DOM

function blogSlider() {
    let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

}
blogSlider()


//nav bar function
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

// cardslider


const slider = document.querySelector('.slider-container');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = cards[0].clientWidth + 20; // width + margin

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slider.style.transform = 'translateX"(' + (-size * --counter) + 'px)';
});

nextBtn.addEventListener('click', () => {
    if (counter >= cards.length - 4) return;
    slider.style.transform = 'translateX(' + (-size * ++counter) + 'px)';
});





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