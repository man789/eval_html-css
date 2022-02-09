let myBurger = document.querySelector(".burger-menu");
let myNav = document.querySelector(".nav-link");
let bgMenu = document.querySelector(".menu-bg");
let link = document.querySelectorAll(".nav__link");

function hasClick(){
    myNav.classList.toggle("active");
    bgMenu.classList.toggle("active");
}

myBurger.addEventListener("click", hasClick);
bgMenu.addEventListener("click", hasClick);

for(i=0; i<link.length; i++){
    link[i].addEventListener("click", hasClick)
}
