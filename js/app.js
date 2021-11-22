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

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//Navigation

const navBarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

for(section of sections) {
    let navElement = document.createElement("li");
    navElement.innerHTML = `<a class = 'menu__link' href ='#${section.getAttribute("id")}'>${section.getAttribute("data-nav")}</a>`;
    navBarList.appendChild(navElement);
};
 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function addActive() {
    for (section of sections){
        section.classList.add("your-active-class");
  }
}

function removeActive() {
    for (section of sections){
        section.classList.remove("your-active-class");
    }
}

function isInViewport(sections) {
  const rect = sections.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function viewportClass() {
  for (section of sections) {
    if (isInViewport == true) {
      addActive();
    } else {
      removeActive();
    }
  }
}

window.addEventListener("scroll", viewportClass());




// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


