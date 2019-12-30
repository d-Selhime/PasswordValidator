let validationBox =  document.querySelector('.validation-box');
// console.log(validationBox)

// get password input on focus
let pwdInput = document.querySelector('#password');
// console.log(pwdInput)
let characters = document.querySelector('.character');
let length = document.querySelector('.length');
let number = document.querySelector('.number');

const eyeOff = document.querySelector('.icon__eye-off')
const eyeOn = document.querySelector('.icon__eye-on')


// initially hide validation box and show onfocus 
const check = pwdInput.onfocus = function() {
    validationBox.classList.remove('validation-box')
    validationBox.classList.add('validate-box')
};
// When user types into input check for a min of 8 characters
const valid = pwdInput.onkeyup = () => { 

 if (pwdInput.value.length >= 8) {
     length.classList.remove('invalid')
     length.classList.add('is-valid')
 }
// check for at least 1 number
let nums = /[0-9]/g;
 if (pwdInput.value.match(nums)) {
    number.classList.remove('invalid')
    number.classList.add('is-valid')
}
//check for special character
let specChar = /[!@#$%^&*(),.?":{}|<>]/g;
 if (pwdInput.value.match(specChar)) {
     characters.classList.remove('invalid')
     characters.classList.add('is-valid')
 }
}

//clear input on button click
const clearInput = document.getElementById('reset').addEventListener('click', function () {
    pwdInput.value = ""
    length.classList.add('invalid')
    length.classList.remove('is-valid')

    number.classList.add('invalid')
    number.classList.remove('is-valid')

    characters.classList.add('invalid')
    characters.classList.remove('is-valid')
})

//show password on eye click

const icons = document.querySelector('.icon')
icons.addEventListener('click', function () {
   
  console.log('button clicked');

eyeOn.classList.toggle('is-hidden')
    pwdInput.setAttribute('type', 'password')
eyeOff.classList.toggle( 'is-hidden')
    pwdInput.removeAttribute('type', 'password')
})

icons.addEventListener('click', () => {
    
    if (eyeOff.classList.contains('is-active')) {
        pwdInput.setAttribute('type', 'password')
    } else if  (eyeOn.classList.contains('is-hidden')) {
        pwdInput.removeAttribute('type', 'password')
    } else {
        return
    }
})

