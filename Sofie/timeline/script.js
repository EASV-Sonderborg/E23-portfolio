// Tager fat på den nuværende dag (Søndag = 0, lørdag = 6)
const currentDayOfWeek = new Date().getDay();

// Array med dagene 
const days = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag']

// Får den nuværende dags navn 
const currentDay = days[currentDayOfWeek];

// Nupper lige alle mine p'er, som indeholder de forskellige dage
const currentDayElements = document.querySelectorAll('p');

// Looper lige igennem dem alle sammen
currentDayElements.forEach(dayElement => {
    // Convert the text to lowercase and trim any extra spaces
    const dayText = dayElement.textContent.trim().toLowerCase();
    // Find the corresponding timeline elements
    const timeline = dayElement.parentElement;
    const line = timeline.querySelector('.timeline__line');
    const circle = timeline.querySelector('.timeline__circle');

    // Check if the day matches the current day
    if (dayText === currentDay) {

        // Add the '--active' class to highlight the current day
        line.classList.add('--active');
        timeline.classList.add('currentDay')
        line.classList.remove('--default');
        circle.classList.add('--activeCircle');
        circle.classList.remove('--default');
        circle.style.visibility = 'visible';
    } else if (dayText != currentDay) {
        circle.style.visibility = 'hidden';
    }
}); 







