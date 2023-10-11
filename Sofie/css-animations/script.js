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
// Ref. til clientWidth: https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth

// Function som anvendes når det bliver klikket på en af next knappen:
function nextSlide(){
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth; 
    // ovenstående linje kan også skrives sådan: slidesContainer.scrollLeft = slidesContainer.scrollLeft + slideWidth
}

// GSAP Ball
gsap.to(".ball", { 
    rotation: 360,
    x: '96vw',
    xPercent: -100,
    // special properties
    duration: 2, // how long the animation lasts
    repeat: -1, // the number of repeats - this will play 3 times
    yoyo: true, // this will alternate back and forth on each repeat. Like a yoyo
  });

// Surprise knap
const button = document.querySelector('.tap')
const heart = document.querySelector('.hearts')
const surprise = document.querySelector('.surprise');

// button.addEventListener('click', () => {
//     // New heart being appended into the surprise section
//     const heart2 = document.createElement('img');

//     heart2.src = "images/heart.png";
//     heart2.setAttribute('class', 'hearts');
//     surprise.appendChild(heart2);

//     heart2.style.visibility = 'visible';
//     heart.style.visibility = 'visible';

//     gsap.fromTo(heart, {
//       y: -550,
//       x: -550,
//     }, {
//       duration: 5,
//       y: 500,
//       yoyo: false,
//       repeat: 0,
//     });
  
//     gsap.fromTo(heart2, {
//         y: -350,
//         x: -350,
//     }, {
//         duration: 4,
//         y: 500,
//         yoyo: false,
//         repeat: 0,
//     });
// });


let hearts = 10; 


for (let i = 0; i < hearts; i++) {
    const clone = heart.cloneNode(true);
    surprise.appendChild(clone);
    
    const top = '-400px';
    let right = Math.random() * 1500 + "px";
    
    clone.style.top = top;
    clone.style.right = right;
    
    clone.style.visibility = 'hidden';

        button.addEventListener('click', () => {
            clone.style.visibility = 'visible';
        
            gsap.fromTo(clone, {
                    y: -550,
                    }, {
                    duration: (Math.random() * 15),
                    y: 810,
                    yoyo: false,
                    repeat: 0,
                    });
        })
    }
    

    // Checkbox animation
    const theme = document.getElementById('theme');
const changeTheme = document.getElementById('mode');

changeTheme.onchange = (e) => {
  if (changeTheme.checked === true) {
    console.log("Checked")
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    window.localStorage.setItem('mode', 'light');
  } else {
    console.log("Not Checked")
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    window.localStorage.setItem('mode', 'dark');
  }
}
const mode = window.localStorage.getItem('mode');
if (mode == 'dark') {
  changeTheme.checked = true;
  document.documentElement.classList.remove("light")
  document.documentElement.classList.add("dark")
}

if (mode == 'light') {
  changeTheme.checked = false;
  document.documentElement.classList.remove("dark")
  document.documentElement.classList.add("light")
}