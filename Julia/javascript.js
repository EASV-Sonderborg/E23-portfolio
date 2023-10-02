
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

/** copy right in footer */
const year = document.querySelector('#current-year')
year.innerHTML= new Date().getFullYear()


 


