/////////////////////////////////////////////////////////////////////////
/////////////Global variables///////////////////////////////////////////

const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const sumbitBtn = document.querySelector(".submit-btn");

let showMenu = false;

/////////////////////////////////////////////////////////////////////////
///////////////////Funtions/////////////////////////////////////////////

// Toggle the hamburger menu for mobile screen
const toggleMenu = function () {
    const hamburger = document.querySelector(".menu-btn__burger");
    const nav = document.querySelector(".nav");
    const navItems = document.querySelectorAll(".menu-nav__item");
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

sumbitBtn.addEventListener("submit", (e) => {
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    e.preventDefault();
    emailInput.value = "";
    nameInput.value = "";
    messageInput.value = "";
});
