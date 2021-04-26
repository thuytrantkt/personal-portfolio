import { jobs } from "./jobs.js";
import { projects } from "./projects.js";
import { skills } from "./skills.js";

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

// Map through the array of objects to render skills to HTML
skills.forEach((skill) => {
    const skillsElem = document.querySelector(".skills-container");
    const skillsHtml = `
    <div class="skill-item">
        <div><i class="${skill.icon}"></i></div>
        <p>${skill.name}</p>
    </div>
    `;
    skillsElem.insertAdjacentHTML("beforeend", skillsHtml);
});

// Map through the array of objects to render jobs to HTML
jobs.forEach((job) => {
    const jobElem = document.querySelector(".jobs");
    let jobHtml = `
    <div class="jobs__container">
    <h3>${job.title}</h3>
    <h4>${job.company}</h4>
    <h5>${job.date}</h5>
    <ul class="jobs__description">
    `;

    // Loop through the array of each job duties
    for (let i = 0; i < job.duties.length; i++) {
        jobHtml += `
        <li class="jobs__description-item">
            ${job.duties[i]}
        </li>
        `;
    }

    jobHtml += `
    </ul>
    </div>
    `;

    jobElem.insertAdjacentHTML("beforeend", jobHtml);
});

// Map through the array of objects to render projects to HTML
projects.forEach((project) => {
    const projectsElem = document.querySelector(".projects__items");
    const projectsHtml = `
    <div class="projects__item">
        <img
            src=${project.imgPath}
            alt=${project.title}
        />
        <h4>${project.description}</h4>
        <h5>Technology: ${project.technologies}</h5>
        <div class="projects__btns">
            <a
                href=${project.siteUrl}
                class="projects__btn"
                aria-label="Go to the live site of the project"
            >
                <i class="fas fa-eye" aria-hidden></i> Preview
            </a>
            <a
                href=${project.githubUrl}
                class="projects__btn"
                aria-label="Go to the GitHub repository to view the codes of the project"
            >
                <i class="fab fa-github" aria-hidden></i> Github
            </a>
        </div>
    </div>
    `;
    projectsElem.insertAdjacentHTML("beforeend", projectsHtml);
});
