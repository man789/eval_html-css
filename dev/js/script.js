// --- Burger Script ---
// declaration de variables
let myBurger = document.querySelector(".burger-menu");
let myNav = document.querySelector(".nav-link");
let bgMenu = document.querySelector(".menu-bg");
let link = document.querySelectorAll(".nav__link");
// Creation de Fonction au Click
function hasClick(){
    myNav.classList.toggle("active");
    bgMenu.classList.toggle("active");
}
// Activation de fonction
myBurger.addEventListener("click", hasClick);
bgMenu.addEventListener("click", hasClick);
// Menu se desactive au clicl de lien
for(i=0; i<link.length; i++){
    link[i].addEventListener("click", hasClick)
}

// --- Sticky Script ---
// declaration de variables
let Naviguation = document.querySelector(".nav");
let sticky = 10;
// Activation de fonction
document.addEventListener('scroll', () => {
    if(window.pageYOffset > sticky){
        Naviguation.classList.add("sticky");
    }else{
        Naviguation.classList.remove("sticky");
    }
});