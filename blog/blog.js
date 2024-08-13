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




// animations
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
    slider.style.transform = 'translateX(' + (-size * --counter) + 'px)';
});

nextBtn.addEventListener('click', () => {
    if (counter >= cards.length - 4) return;
    slider.style.transform = 'translateX(' + (-size * ++counter) + 'px)';
});