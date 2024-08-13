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


