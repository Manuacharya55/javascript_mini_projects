const userSelectedGrid = document.querySelector('#select-grid')
const drawingBoard = document.querySelector('.drawing-board');
const colors = document.querySelectorAll('.color');
const eraser = document.querySelector('.eraser');

let selectedColor = 'red';
let isEraserSelected = false;
let isMousedown = false;

eraser.addEventListener('click', () => {
    isEraserSelected = true;
})

colors.forEach((color) => {
    color.addEventListener('click', () => {
        isEraserSelected = false;
        selectedColor = color.classList[1];
    })
})

const gridchild = document.querySelectorAll('.grid-child');

document.addEventListener('mousedown', () => {
    isMousedown = true;
})

document.addEventListener('mouseup', () => {
    isMousedown = false;
})

gridchild.forEach((child) => {
    child.addEventListener('mouseover', () => {
        if (isEraserSelected && isMousedown) {
            child.classList.remove('red', 'blue', 'green', 'yellow', 'pink');
        } else
            if (isMousedown) {
                child.classList.remove('red', 'blue', 'green', 'yellow', 'pink');
                child.classList.add(selectedColor);
            }
    })
})

gridchild.forEach((child) => {
    child.addEventListener('click', () => {
        if (isEraserSelected) {
            child.classList.remove('red', 'blue', 'green', 'yellow', 'pink');
        } else {
            child.classList.remove('red', 'blue', 'green', 'yellow', 'pink');
            child.classList.add(selectedColor);
        }
    })
})