const buttons = document.querySelectorAll(".linkButton");
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const url = button.getAttribute("data-url");
        window.open(url, '_blank');
    });
});