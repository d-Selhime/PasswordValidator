let validationBox =  document.querySelector('.validation-box');
console.log(validationBox)
// get password input on focus
let pwdInput = document.querySelector('#password');
console.log(pwdInput)
let characters = document.querySelector('.character');
let length = document.querySelector('.length');
let number = document.querySelector('.number');


// add display block to validation-box
pwdInput.onfocus = function() {
    validationBox.style.display = "block"
};
// add display none to validation box on blur
pwdInput.onblur = function() {
 validationBox.style.display = "none"
};

// When user types into input
pwdInput.onkeyup = () => { 
    console.log(pwdInput.value);  
 if (pwdInput.value.length >= 8) {
     console.log("length %o", length)
     length.classList.remove('invalid')
     length.classList.add('is-valid')
 }
}