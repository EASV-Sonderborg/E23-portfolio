//Submit button
const submit = document.querySelector('.submit')

//login & signup buttoms 
const login = document.querySelector('.loginbtn')
const signup = document.querySelector('.signupbtn')

//login labels
const loginInfo = document.querySelector('.login')

//sign up labels
const signupInfo = document.querySelector('.signup')

//Login - forgotten password
const link = document.querySelector('.submitArea--link')
const loginText = document.querySelector('.submitArea--text')
const loginHeader = document.querySelector('.loginHeader')
const submitArea = document.querySelector('.submitArea')

//H2
const header = document.querySelector('h2')
//H3
const secondaryHeader = document.querySelector('h3')

login.addEventListener('click', () => {
    loginInfo.classList.remove('--inactive');
    login.classList.remove('--inactiveBtn', '--left'); 

    signup.classList.remove('--activeBtn');
    signup.classList.add('--inactiveBtn', '--right');
    signupInfo.classList.add('--inactive');

    loginText.classList.remove('--inactive')
    loginHeader.classList.add('loginHeader')

    header.textContent = "Long thyme no see!";
    secondaryHeader.textContent = "So much have happened since your departure";
    submit.textContent = "Lets go!";
})

signup.addEventListener('click', () => {
    // signup.classList.add('--right', '--inactiveBtn');
    signup.classList.remove('--inactiveBtn', '--right');
    signupInfo.classList.remove('--inactive');

    loginInfo.classList.add('--inactive');
    login.classList.add('--inactiveBtn', '--left'); 

    loginText.classList.add('--inactive')
    loginHeader.classList.remove('loginHeader')

    header.textContent = "Lets get your account created!";
    secondaryHeader.textContent = ""
})

// password thingie
// show/hide password
const visToggle = document.querySelector('.eyeIcon');

const input = document.querySelector('.password__check input');

let password = true; // bullets are showing

visToggle.addEventListener('click', function(){
    if (password) { 
        input.setAttribute('type','text'); 
        visToggle.classList.remove('fa-eye'); 
        visToggle.classList.add('fa-eye-slash');
    } else { 
        input.setAttribute('type','password');
        visToggle.classList.remove('fa-eye-slash');
        visToggle.classList.add('fa-eye');
    }
    password = !password; // when password is false the text is showing
});