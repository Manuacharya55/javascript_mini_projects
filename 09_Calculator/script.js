const calculatorbtn = document.querySelectorAll('.btn');
const equals = document.querySelector('.equals');
const textBox = document.querySelector('#numerics');
const clear = document.querySelector('.clear')
const percentage = document.querySelector('.percentage')
const del = document.querySelector('.del')
let values = '';


calculatorbtn.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        e.preventDefault();

        values += e.target.textContent;
        textBox.value = values;
    })
})

equals.addEventListener('click', (e) => {
    e.preventDefault()
    values = eval(values)
    textBox.value = values
})

clear.addEventListener('click', (e) => {
    e.preventDefault()
    values = ''
    textBox.value = values
})

del.addEventListener('click', (e) => {
    e.preventDefault();
    if (values.length > 0) {
        values = values.substring(0, values.length - 1);
        textBox.value = values;
    }

})

percentage.addEventListener('click', (e) => {
    e.preventDefault();
    values /= 100;
    textBox.value = values;
})