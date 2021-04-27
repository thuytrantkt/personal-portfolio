/////////////////////////////////////////////////////////////////////////
/////////////Global variables///////////////////////////////////////////

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

/////////////////////////////////////////////////////////////////////////
///////////////////Funtions/////////////////////////////////////////////

// Toggle the hamburger menu for mobile screen
const toggleMenu = function () {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    menuNav.classList.toggle("open");
    navItems.forEach((item) => item.classList.toggle("open"));
    showMenu = !showMenu;
};

///////////////////////////////////////////////////////////////////////////
//////////////////Events//////////////////////////////////////////////////

// Listening to the click events from hamburger button or each section of the page to toggle for displaying the menu
menuBtn.addEventListener("click", toggleMenu);
menuNav.addEventListener("click", toggleMenu);
