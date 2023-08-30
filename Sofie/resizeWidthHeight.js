const body = document.querySelector('body')
const content = document.querySelector('.app')
const browserContent = document.querySelector('.browser');

function updateSize() {
    body.style.height = '100vh'; 
    body.style.width = '100vw'; 
    
    content.style.height = '60vw';
    content.style.width = '100vh';
    
    browserContent.style.height = '100%';
    browserContent.style.width = '100%'; // Set the width to match parent
    
    // If you want to allow scrolling within browserContent
    browserContent.style.overflow = "auto"; 
  }
  
  updateSize();
  window.addEventListener("resize", updateSize);

