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