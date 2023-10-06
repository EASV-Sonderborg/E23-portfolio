// get all draggie elements
var draggableElems = document.querySelectorAll(".makeDraggable");
// array of Draggabillies
var draggies = [];
// init Draggabillies
for (var i = 0; i < draggableElems.length; i++) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly(draggableElem, {
    // options...
  });
  draggies.push(draggie);
}

// Source:
// https://dev.to/shantanu_jana/how-to-create-a-draggable-div-in-javascript-iff
// YAY!

/*
  Refactor drag code, aka project name "dragqueen"




  1) Trigger: mousedown events within dragable sections
  2) Determine: what is the element that is being dragged
  3) On mouse down: add listener (onmousemove), call updateDraggableElement
      + add listener (mouseup)
  4) On mouse up: Clean up


  Usage:
  - Add class "makeDraggable" to any element to make it draggable


*/
/*
// Draggable Magic by the DragQueen
let pos1 = 0,
  pos2 = 0,
  positionXbefore = 0,
  positionYbefore = 0;

function startDraggableMagic() {
  // This sets up everything needed for making stuff draggable

  // 1) Get all elements that should be draggable
  const draggableElements = document.querySelectorAll(".makeDraggable");
  console.log("These elements should be draggable", draggableElements);

  // 2) Add eventlisteners to all
  draggableElements.forEach((element) => {
    element.addEventListener("mousedown", (event) => {
      event.preventDefault();

      // currentTarget is the element that should be dragged
      console.log(event.currentTarget);

      // call the function that handles the dragging
      startDragging(element, event);
    });
    // // nuke it when mouse is up
    // element.addEventListener("mouseup", (event) => {
    //   element.replaceWith(element.cloneNode(true));
    // });
  });
}

function startDragging(element, event) {
  // Set the position BEFORE dragging
  positionXbefore = event.clientX;
  positionYbefore = event.clientY;

  // set drag active class
  element.classList.add("isDragging");

  // Updates the position of the element for the element
  element.addEventListener("mousemove", (event) => {
    updatePosition(element, event);
  });

  // set event for stop dragging
  element.removeEventListener("mousemove", (event) => {
    updatePosition(element, event);
  });
}
function updatePosition(element, event) {
  // updating the position everytime the cursor moves
  positionX = positionXbefore - event.clientX;
  positionY = positionYbefore - event.clientY;
  positionXbefore = event.clientX;
  positionYbefore = event.clientY;

  // Update the position via the style property
  element.style.top = `${element.offsetTop - positionY}px`;
  element.style.left = `${element.offsetLeft - positionX}px`;
}
startDraggableMagic();
*/
/* 
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
 */

// Minimer og close
const minimiseButtons = document.querySelectorAll(".--minimise");
const closeButtons = document.querySelectorAll(".--close");

// App vindue
const app = document.querySelector(".app");

// Webbrowser
const toggleBrowser = document.querySelector(".--webBrowser");

// Footer
const footerArea = document.querySelector(".footer__area");
const footerApp = document.querySelector(".footer__app");
const footerText = document.querySelector(".footer__appBody");
const footerImg = document.querySelector(".footer__appImg");
const footer = document.querySelector('.footer__start')

// Klokkeslæt 
function updateTime(){
  const time = document.querySelector('.footer__startTimeBody');
  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  
  const formattedTime = `${hours}:${minutes}`;
  time.innerHTML = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();


// Ikoner
const web = document.querySelector(".--web");
const icon = document.querySelectorAll(".icons");

// Calculator
const calc = document.querySelector(".--calculator");
const calculator = document.querySelector('.--calculatorBrowser')
const calcFooter = document.querySelector('.footer__calculator')

calc.addEventListener("dblclick", () => {
  // calculator.classList.add('--above')
  // toggleBrowser.classList.add('--below')
  calculator.style.visibility = "visible"
  calcFooter.style.visibility = 'visible';
  calcFooter.classList.add("--active");
  calcFooter.classList.remove("--minimized")
})

minimiseButtons.forEach(minimiseButton => {
  minimiseButton.addEventListener("click", () => {
   const parentElement = minimiseButton.parentElement.parentElement.parentElement;

   if (parentElement.classList.contains("--webBrowser")) {
      toggleBrowser.style.visibility = "hidden";
      footerApp.classList.remove('--active')
      footerApp.classList.add("--minimized");
   } else if (parentElement.classList.contains("--calculatorBrowser")) {
     calculator.style.visibility = "hidden";
     calcFooter.classList.add('--minimized')
     calcFooter.classList.remove('--active')
   }
  });
});

web.addEventListener("dblclick", () => {
  footerApp.style.display = "flex";
  toggleBrowser.style.visibility = "visible";
  footerApp.classList.remove("--minimized");
  footerApp.classList.add('--active');
});

// Close App fully
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", () => {
    const grandgrandpa = closeButton.parentElement.parentElement.parentElement;

    if (grandgrandpa.classList.contains("--webBrowser")) {
      toggleBrowser.style.visibility = "hidden";
      
      //footerApp.style.visibility = "hidden";
      footerApp.style.display = "none";
   } else if (grandgrandpa.classList.contains("--calculatorBrowser")) {
     calculator.style.visibility = "hidden";
     
     calcFooter.style.visibility = "hidden";
   }
  });
});

// Footer app start 
const start = document.querySelector('.start__app');
const footerbtn = document.querySelector('.footer__startBtn')

footerbtn.addEventListener('click', () => {
  start.style.visibility = 'visible';
}) 

footerbtn.addEventListener('dblclick', () => {
  start.style.visibility = 'hidden';
})