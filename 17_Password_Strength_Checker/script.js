const userInputPassword = document.querySelector('#password');
const passwordLength = document.querySelector('.password-length');
const upperCase = document.querySelector('.uppercase');
const lowerCase = document.querySelector('.lowercase');
const numerics = document.querySelector('.numerics')
const specialCharacter = document.querySelector('.special-character');
const submitButton = document.querySelector('#submit');
const popup = document.querySelector('.popup');

const uppercaseRegex = /[A-Z]/
const lowercaseRegex = /[a-z]/
const numberRegex = /[0-9]/
const specialcharacterRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/


// used to remove red and green class
const removeClass = () => {
    const redClass = document.querySelectorAll('.red');
    redClass.forEach((element) => {
        element.classList.remove('red')
    });

    const greenClass = document.querySelectorAll('.green');
    greenClass.forEach((element) => {
        element.classList.remove('green')
    });
}


const addClass = (condition, className) => {
    condition.classList.add(className)
}

// used to display pop modal with message
const displayPopup = (message, className) => {
    popup.innerHTML = message;
    addClass(popup, className);

    popup.style.transform = 'translateX(0%)';

    setTimeout(() => {
        popup.style.transform = 'translateX(300%)'
    }, 2500)
}

// will call displayPopup() method according to redClass count 
const displayResult = () => {
    const redClassCount = document.querySelectorAll('.red').length;

    switch (redClassCount) {
        case 5: displayPopup('Your Password is very poor', 'red');
            break;

        case 4: displayPopup('Your Password is poor', 'red');
            break;

        case 3: displayPopup('Your Password is poor', 'red');
            break;

        case 2: displayPopup('Your Password is poor', 'red');
            break;

        case 1: displayPopup('Your Password needs little imporvement', 'red');
            break;

        case 0: displayPopup('Your Password is Strong', 'green');
            break;
    }
}

// checks strength of passsword using regex
const checkPassword = (userpassword) => {
    userpassword.length > 12 ? addClass(passwordLength, 'green') : addClass(passwordLength, 'red');
    uppercaseRegex.test(userpassword) ? addClass(upperCase, 'green') : addClass(upperCase, 'red');
    lowercaseRegex.test(userpassword) ? addClass(lowerCase, 'green') : addClass(lowerCase, 'red');
    numberRegex.test(userpassword) ? addClass(numerics, 'green') : addClass(numerics, 'red');
    specialcharacterRegex.test(userpassword) ? addClass(specialCharacter, 'green') : addClass(specialCharacter, 'red');

    displayResult();
}

// adding event to submit button
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    removeClass();
    checkPassword(userInputPassword.value);
})