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

let hearts = 10; 


for (let i = 0; i < hearts; i++) {
    const clone = heart.cloneNode(true);
    surprise.appendChild(clone);
    
    const top = '0px';
    let right = Math.random() * 1500 + "px";
    
    clone.style.top = top;
    clone.style.right = right;
    
    clone.style.visibility = 'hidden';

        button.addEventListener('click', () => {
            clone.style.visibility = 'visible';
        
            gsap.fromTo(clone, {
                    y: -450,
                    }, {
                    duration: (Math.random() * 15),
                    y: 725,
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
    console.log("Not Checked")
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
    window.localStorage.setItem('mode', 'dark');
  } else {
    console.log("Checked")
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
    window.localStorage.setItem('mode', 'light');
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