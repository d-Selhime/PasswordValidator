let validationBox =  document.querySelector('.validation-box');
console.log(validationBox)
// get password input on focus
let pwdInput = document.querySelector('#password');
console.log(pwdInput)
// add display block to validation-box
pwdInput.onfocus = function() {
    validationBox.style.display = "block"
};
// add display none to validation box on blur
pwdInput.onblur = function() {
 validationBox.style.display = "none"
};