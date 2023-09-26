const hamburger = document.querySelector('.hamburger');


const navMenu = document.querySelector('.nav-menu');


const navLink = document.querySelectorAll('.nav-link');
console.log(navLink);

hamburger.addEventListener('click', mobileMenu);


navLink.forEach(n => n.addEventListener('click',closeMenu)); 
function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}


function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}


/** typing text */
const typingText = document.getElementById("typing-text");

function typeText() {
  typingText.classList.remove("hidden"); // Usuń klasę "hidden" aby pokazać element

  setTimeout(function() {
    typingText.style.animation = "none"; // Usuń animację po napisaniu tekstu
  }, 3000); // Oczekuj 3 sekundy przed zakończeniem animacji
}

// Wywołaj funkcję typeText po załadowaniu strony
window.onload = function() {
  typeText();
};
/**----- */


/**cursor pointer starts */

const handleMousePos = (e) => {
  const CURSOR = document.querySelector('#mouse-cursor');
  const HOVER = document.querySelectorAll('.cursor-hover');
  const { pageX: posX, pageY: posY } = e;

  const runMouseOver = () => {
    CURSOR.style.transform = 'scale(4)';
 ;
  };
  HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

  const runMouseLeave = () => {
    CURSOR.style.transform = '';
 
  };
  HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
  
  return (
    CURSOR.style.left = `${posX - 10}px`,
    CURSOR.style.top = `${posY - 10}px`  
  );
};
document.addEventListener('mousemove', handleMousePos);
/** cursor pinter ends */





/** copy right in footer */
const year = document.querySelector('#current-year')
year.innerHTML= new Date().getFullYear()

