const body = document.querySelector('body')
const content = document.querySelector('.app')
const browserContent = document.querySelector('.browser');

function updateSize() {
    body.style.height = '100vh'; 
    body.style.width = '100vw'; 
    
    // content.style.height = '75vh';
    // content.style.width = '75vw';
    
    browserContent.style.height = '100%';
    browserContent.style.width = '100%';
  }
  
  updateSize();
  window.addEventListener("resize", updateSize);

