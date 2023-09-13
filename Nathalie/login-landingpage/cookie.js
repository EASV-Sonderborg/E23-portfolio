/* WelcomePage til Cookie */
const cookieButton = document.querySelector('.cookie__button');
const welcomePage = document.querySelector('.welcome__page');
const welcomeCookie = document.querySelector('.welcome__cookie');

cookieButton.addEventListener('click', function () {
    console.log('Button clicked');
    welcomePage.style.display = 'none';
    welcomeCookie.style.display = 'block';
});
