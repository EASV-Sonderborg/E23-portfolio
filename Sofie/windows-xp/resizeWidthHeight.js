const body = document.querySelector('body')
const content = document.querySelector('.browser')
const browserContent = document.querySelector('.--webBrowser');

function updateSize() {
    body.style.height = '100vh'; 
    body.style.width = '100vw'; 
    
    content.style.height = '100%';
    content.style.width = '100%';
    
    browserContent.style.height = '60vh';
    browserContent.style.width = '60vw';
  }
  
  updateSize();
  window.addEventListener("resize", updateSize);

