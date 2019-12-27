let validationBox =  document.querySelector('.validation-box');
// console.log(validationBox)

// get password input on focus
let pwdInput = document.querySelector('#password');
// console.log(pwdInput)
let characters = document.querySelector('.character');
let length = document.querySelector('.length');
let number = document.querySelector('.number');


// initially hide validation box and show onfocus 
pwdInput.onfocus = function() {
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
    
})

//show password on eye click
// const eyeIcon = document.querySelector('.eyeIcons')
const icons = document.querySelector('.icon')
icons.addEventListener('click', function () {
    const eyeOff = document.querySelector('.icon__eye-off')
    const eyeOn = document.querySelector('.icon__eye-on')
    
  console.log('button clicked');
  eyeOff.classList.remove('is-active')
  eyeOff.classList.add('is-hidden')
   if (eyeOff.classList.contains('is-hidden')) {
       eyeOn.classList.add('is-active')
       pwdInput.removeAttribute('type')
   } else  {
       //not working
        eyeOn.classList.remove('is-active')
        eyeOn.classList.add('is-hidden')
        eyeOff.classList.add('is-active')
        pwdInput.setAttribute('type', 'password')
   }


   

// pwdInput.removeAttribute(type)


})
