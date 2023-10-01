// Selecting element in the HTML document:
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link') // querySelectorAll vælger alle i samme class

// Listening for a click event on hamburger button:
hamburger.addEventListener('click', mobileMenu);

//Event Listener for all navLinks: 
navLink.forEach(n => n.addEventListener('click', closeMenu));

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

//Dette får menuen til at lukke igen, når man har trykket på et link
//When a menu-item is clicked - the active classes are removed from the hamburger and navMenu
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}