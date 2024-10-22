function sideBarMenu() {
  const menuButton = document.getElementById("menu-button");
  const navBar = document.getElementById("navbar");
  const closeButton = document.getElementById("close");

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      navBar.classList.add("active");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      navBar.classList.remove("active");
    });
  }
}
sideBarMenu();



// const button = document.getElementById("buy-button")
// button.addEventListener("click", function () {
//   console.log("clicked");
//   document.querySelector("#form").style.top = "50%"
// })

let mainImage = document.getElementById("main-image")
let similarImage = document.getElementsByClassName("sub-image")

similarImage[0].onclick = function(){
  mainImage.src = similarImage[0].src
}

similarImage[1].onclick = function(){
  mainImage.src = similarImage[1].src
}

similarImage[2].onclick = function(){
  mainImage.src = similarImage[2].src
}

similarImage[3].onclick = function(){
  mainImage.src = similarImage[3].src
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


// gsap.from("#signup .signup-text",{
//   x:-700,
//   opacity:0,
//   scrollTrigger:{
//       trigger:"#signup .signup-text",
//       scroller:"body",
//       // markers:true,
//       start:"top 100%",
//       end:"top 65%",
//       scrub:2,
//   }
// })

// gsap.from("#signup .signup-form",{
//   x:700,
//   opacity:0,
//   scrollTrigger:{
//       trigger:"#signup .signup-form",
//       scroller:"body",
//       // markers:true,
//       start:"top 100%",
//       end:"top 65%",
//       scrub:2,
//   }
// })

// gsap.from("#footer #ftc1",{
//   x:-300,
//   opacity:0,
//   scrollTrigger:{
//       trigger:"#footer #ftc1 ",
//       scroller:"body",
//       // markers:true,
//       start:"top 100%",
//       end:"top 60%",
//       scrub:2,
//   }
// })

// gsap.from("#footer #ftc2",{
//   x:300,
//   opacity:0,
//   scrollTrigger:{
//       trigger:"#footer #ftc2 ",
//       scroller:"body",
//       // markers:true,
//       start:"top 100%",
//       end:"top 60%",
//       scrub:2,
//   }
// })

// gsap.from("#footer #ftc3",{
//   y:200,
//   opacity:0,
//   scrollTrigger:{
//       trigger:"#footer #ftc3 ",
//       scroller:"body",
//       // markers:true,
//       start:"top 100%",
//       end:"top 80%",
//       scrub:2,
//   }
// })

// gsap.from(".copy h6",{
//   scale:0,
//   opacity:0,
//   scrollTrigger:{
//       trigger:".copy h6",
//       scroller:"body",
//       // markers:true,
//       start:"top 100%",
//       end:"top 96%",
//       scrub:2,
//   }
// })
