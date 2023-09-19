// Source:
// https://dev.to/shantanu_jana/how-to-create-a-draggable-div-in-javascript-iff
// YAY!

const dragElement = (element, dragzone) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const dragMouseUp = () => {
    document.onmouseup = null;
    document.onmousemove = null;

    element.classList.remove("drag");
  };

  const dragMouseMove = (event) => {
    event.preventDefault();

    pos1 = pos3 - event.clientX;
    pos2 = pos4 - event.clientY;
    pos3 = event.clientX;
    pos4 = event.clientY;

    element.style.top = `${element.offsetTop - pos2}px`;
    element.style.left = `${element.offsetLeft - pos1}px`;
  };

  const dragMouseDown = (event) => {
    event.preventDefault();

    pos3 = event.clientX;
    pos4 = event.clientY;

    element.classList.add("drag");

    document.onmouseup = dragMouseUp;
    document.onmousemove = dragMouseMove;
  };

  dragzone.onmousedown = dragMouseDown;
};

const dragable = document.getElementById("dragable"),
  dragzone = document.getElementById("dragzone");

dragElement(dragable, dragzone);

//Minimer 
const minimise = document.querySelectorAll('.app__btn--minimise');
const close = document.querySelectorAll('.app__btn--close')

const app = document.querySelector('.app')
const toggleBrowser = document.querySelector('.--webBrowser')
const footerApp = document.querySelector('.footer__app')
const footerText = document.querySelector('.footer__appBody')
const footerImg = document.querySelector('.footer__appImg')

const web = document.querySelector('.--web')
const icon = document.querySelectorAll('.icons')

const calc = document.querySelector('.--calculator')

minimise.forEach((minimizeButton) => {
  minimizeButton.addEventListener('click', () => {
    toggleBrowser.style.visibility = 'hidden';
    footerApp.classList.add('--minimized');
    footerText.textContent = "Internet Explorer"
    footerImg.src = "icons/web.png";
  })
})

web.addEventListener('dblclick', () => { 
  footerApp.style.visibility = 'visible'; 
  toggleBrowser.style.visibility = 'visible'; 
  footerApp.classList.remove('--minimized');
  footerText.textContent = "Internet Explorer"
  footerImg.src = "icons/web.png";
});

// Close App fully
close.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    footerApp.style.visibility = 'hidden'; 
    toggleBrowser.style.visibility = 'hidden'; 
    footerApp.classList.remove('--minimized');
    footerText.textContent = ""
    footerImg.src = "";
  })
})
