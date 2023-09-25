/* error login and correct login */
const errorMessage = document.querySelector('.login__error');
const loginButton = document.querySelector('.login__button');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');

loginButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch('login.json');
        const data = await response.json();

        const users = data[0].user;

        // Find brugeren i arrayet
        const user = users.find(user => user.username === username);

        if (user && user.password === password) {
            // Omdigere til welcome.html når både username og password er korrekt
            window.location.href = 'welcome.html';
        } else {
            // Forkert brugernavn eller login vises denne besked i tomme <p>
            errorMessage.textContent = '!Forkert brugernavn eller kodeord!';
            errorMessage.style.color = 'red';
        }
    } catch (error) {
        console.error('Ups, en fejlt opstod. Prøv igen!', error);
    }
});





/* Toggle password eye - Ny kode */
const eyeIconLogin = document.querySelector('.eyeIconLogin');
const passwordLogin = document.querySelector('.passwordLogin'); // Vælg inputfeltet Login
const eyeIconSignup = document.querySelector('.eyeIconSignup');
const passwordSignup = document.querySelector('.passwordSignup'); // Vælg inputfeltet Login

let password = true;

eyeIconLogin.addEventListener('click', function () {
    if (password) {
        passwordLogin.setAttribute('type', 'text');
        eyeIconLogin.classList.remove('fa-eye-slash');
        eyeIconLogin.classList.add('fa-eye');
    } else {
        passwordLogin.setAttribute('type', 'password');
        eyeIconLogin.classList.remove('fa-eye');
        eyeIconLogin.classList.add('fa-eye-slash');
    }
    password = !password;
});
eyeIconSignup.addEventListener('click', function () {
    if (password) {
        passwordSignup.setAttribute('type', 'text');
        eyeIconSignup.classList.remove('fa-eye-slash');
        eyeIconSignup.classList.add('fa-eye');
    } else {
        passwordSignup.setAttribute('type', 'password');
        eyeIconSignup.classList.remove('fa-eye');
        eyeIconSignup.classList.add('fa-eye-slash');
    }
    password = !password;
});
/* Gamle kode
const visToggle = document.querySelector('.eyeIcon');
const input = document.querySelector('.password'); // Vælg inputfeltet

var password = true;

visToggle.addEventListener('click', function () {
    if (password) {
        input.setAttribute('type', 'text');
        visToggle.classList.remove('fa-eye');
        visToggle.classList.add('fa-eye-slash');
    } else {
        input.setAttribute('type', 'password');
        visToggle.classList.remove('fa-eye-slash');
        visToggle.classList.add('fa-eye');
    }
    password = !password;
});*/





/* Login page to signup page */
// select all button element node
document.querySelectorAll('.landingpage__button').forEach((element) => {
    // for each of them add eventlistener
        // console.log(element);
    element.addEventListener('click', (e)=>{
    
      // First, remove all active classes from all elements
      removeAllActiveClasses();
    
      // Then add in active class for the element that was clicked on
      e.target.classList.toggle("--active");
        // console.log("clicked on this element", e.target);
    
  });
});

function removeAllActiveClasses() {
  console.log("Removing all active classes");
  document.querySelectorAll('button').forEach((element) =>  {   
    element.classList.remove("--active");
  });
}




/* Login page to signup page */
const loginForm = document.querySelector('.login__form');
const signupForm = document.querySelector('.signup__form');

document.querySelectorAll('.landingpage__button').forEach((element) => {
    element.addEventListener('click', (e) => {
        // Fjern alle aktive klasser fra knapperne
        removeAllActiveClasses();

        // Tilføj aktiv klasse til den klikkede knap
        e.target.classList.toggle("--active");

        // Vis eller skjul formularer baseret på den klikkede knap
        if (e.target.classList.contains('login__landingpage')) {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
        } else if (e.target.classList.contains('signup__landingpage')) {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    });
});
