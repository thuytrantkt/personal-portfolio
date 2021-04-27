/////////////////////////////////////////////////////////////////////////
/////////////Global variables///////////////////////////////////////////

const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const scrollUpBtn = document.querySelector(".button-up");

let showMenu = false;

/////////////////////////////////////////////////////////////////////////
///////////////////Funtions/////////////////////////////////////////////

// Toggle the hamburger menu for mobile screen
const toggleMenu = () => {
    const hamburger = document.querySelector(".menu-btn-burger");
    const nav = document.querySelector(".nav");
    const navItems = document.querySelectorAll(".menu-nav-item");
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    menuNav.classList.toggle("open");
    navItems.forEach((item) => item.classList.toggle("open"));
    showMenu = !showMenu;
};

const scrollUpEvent = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
///////////////////////////////////////////////////////////////////////////
//////////////////Events//////////////////////////////////////////////////

// Listening to the click events from hamburger button or each section of the page to toggle for displaying the menu
menuBtn.addEventListener("click", toggleMenu);
menuNav.addEventListener("click", toggleMenu);

// Scroll to top of the page button
scrollUpBtn.addEventListener("click", scrollUpEvent);

// Show the scrollUpEvent by listening the scroll event
window.addEventListener("scroll", () => {
    // Test the position of the scroll to show the scrollUpEvent
    if (document.querySelector("body").getBoundingClientRect().top < -800) {
        scrollUpBtn.style.visibility = "visible";
        // Calling the scrollUpEvent function
    } else {
        scrollUpBtn.style.visibility = "hidden";
    }
});

// Lazy loading project section effect
const allProjects = document.querySelectorAll(".projects-item");

const options = {
    root: null,
    rootMargin: "0px",
    theshold: 0,
};

const showProject = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("projects-item-hidden");
    });
};

const projectObserver = new IntersectionObserver(showProject, options);

allProjects.forEach((project) => {
    projectObserver.observe(project);
    project.classList.add("projects-item-hidden");
});
