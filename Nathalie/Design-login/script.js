// DOM queries:
const prevButton = document.querySelector('.slide-arrow-prev');
const nextButton = document.querySelector('.slide-arrow-next');
const slide = document.querySelector('.slide');
const slidesContainer = document.querySelector('.slides-container');

// Tilføje eventlistener til de to knapper:
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Function som anvendes når det bliver klikket på en af prev knappen:
function prevSlide(){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
}


// Function som anvendes når det bliver klikket på en af next knappen:
function nextSlide(){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth; 
    // ovenstående linje kan også skrives sådan: slidesContainer.scrollLeft = slidesContainer.scrollLeft + slideWidth
}