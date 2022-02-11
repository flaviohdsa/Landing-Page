/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Global Variables

const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


// Global Functions

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add navigation items 

for(section of sections) {
    let navElement = document.createElement("li");
    navElement.innerHTML = `<a class = 'menu__link ${section.getAttribute("id")}' href ='#${section.getAttribute("id")}'>${section.getAttribute("data-nav")}</a>`;
    navBarList.appendChild(navElement);
};

// Navigation Scroll

navBarList.addEventListener('click', function (e) {
    e.preventDefault();
    //The idea of using target was taken from the Jonas Schmedtmann Udemy Course 
    if (e.target.classList.contains('menu__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
    }
});

// Add sections as active//

document.addEventListener("scroll", function() {
    for(section of sections) {
        if (isInViewport(section)) {
            const selectClass = section.getAttribute("id");   
            document.querySelector(`.${selectClass}`).classList.add("active");
            section.classList.add('your-active-class');
        } else {
                const selectClass = section.getAttribute("id");  
                document.querySelector(`.${selectClass}`).classList.remove("active");
              section.classList.remove("your-active-class");
            }
    }
})