const buttons = document.querySelectorAll(".linkButton");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const url = button.getAttribute("data-url");
        window.open(url, '_blank');
    });
});


const projectStylers = document.querySelectorAll('.project__styler');


let largestHeight = 0;

projectStylers.forEach(item => {
    const itemHeight = item.scrollHeight;
    if (itemHeight > largestHeight) {
        largestHeight = itemHeight;
    }
});


projectStylers.forEach(item => {
    item.style.height = largestHeight + 'px';
});
