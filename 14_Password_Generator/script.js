const passwordLength = document.querySelector('#password-length');
const passwordsize = document.querySelector('.password-size');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numerics = document.querySelector('#numerics');
const specialcharacter = document.querySelector('#special-character');
const generatebtn = document.querySelector('.generate');

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

window.addEventListener('load', () => {
    passwordsize.innerHTML = passwordLength.value;
})

passwordLength.addEventListener('change', (e) => {
    passwordsize.innerHTML = e.target.value
})

generatebtn.addEventListener('click', () => {
    const randomUpperCase = uppercase.checked ? true : false;
    const randomLowerCase = lowercase.checked ? true : false;
    const randomNumber = numerics.checked ? true : false;
    const randomCharacter = specialcharacter.checked ? true : false;
    
    generatePassword(randomLowerCase, randomUpperCase, randomNumber, randomCharacter, passwordLength.value)
})

const generatePassword = (randomLowerCase, randomUpperCase, randomNumber, randomCharacter, count) => {
    let finalPassword = ''

    if (!randomLowerCase && !randomUpperCase && !randomNumber && !randomCharacter) return alert('please select any one');


        for (let i = 0; i < count; i++) {
            if (randomLowerCase) {
                finalPassword += lowercaseLetters[Math.floor(Math.random() * count)];
            }

            if (randomUpperCase) {
                finalPassword += uppercaseLetters[Math.floor(Math.random() * count)];
            }

            if (randomNumber) {
                finalPassword += numbers[Math.floor(Math.random() * count)];
            }

            if (randomCharacter) {
                finalPassword += specialChars[Math.floor(Math.random() * count)];
            }

        }

    let finalised = '';
    for (let i = 0; i < count; i++) {
        finalised += finalPassword[i]
    }
    FisherYatesAlgo(finalised)
}

// shuffle the password
const FisherYatesAlgo = (password) => {
    let array = password.split('');

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    document.querySelector('#generated-password').value = (array.join(''));
}

