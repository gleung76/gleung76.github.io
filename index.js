// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.scrollY;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current, i) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = i == 0 ? -50 : current.offsetTop - 150;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(`#${sectionId}-nav`).classList.add("active");
    } else {
      document.querySelector(`#${sectionId}-nav`).classList.remove("active");
    }
  });
}

const navLinks = document.querySelectorAll("#mobile-nav a");
const check = document.querySelector("#menuToggle input");

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

function closeMenu() {
    check.checked = false;
}

