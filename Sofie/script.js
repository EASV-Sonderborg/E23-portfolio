const ribbon = document.querySelectorAll('.ribbon');

const types = ['Animation', 'HTML, CSS, JS', 'Accessibility'];

ribbon.forEach(ribbons => {
    const span = ribbons.querySelector('span');
    if (span) {
        const text = span.textContent;
        if (text === types[0]) {
            ribbons.style.backgroundColor = '#77dd77';
        } else if (text === types[1]) {
            ribbons.style.backgroundColor = '#FF6961';
        } else if (text === types[2]) {
            ribbons.style.backgroundColor = '#A7C7E7';
        }
    }
});
