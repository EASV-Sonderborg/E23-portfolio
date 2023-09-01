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





// function([string1, string2],target id,[color1,color2])    
consoleText(['Digital Marketing Content Creator','Translating pixels into emotions'], 'text',['#C6AA05','#DF0815']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;

      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)

    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}




/**  */
const fadeInTextElements = document.querySelectorAll('.fade-in-text');

fadeInTextElements.forEach((element) => {
  element.style.animation = 'fadeIn 4s forwards';
});

setTimeout(() => {
  fadeInTextElements.forEach((element) => {
    element.style.animation = 'none';
    element.style.opacity = '1';
  });
}, 4000);
