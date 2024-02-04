import { gallery } from './gallery.js';

const galleryImages = document.querySelector('.gallery-images');
const filterObject = document.querySelectorAll('.filter');

// function to filter the elements from array with user filter choice
const fetchData = (object) => {
    if (object === 'all') {
        const data = gallery.filter(value => value);
        bindData(data);
    } else {
        const data = gallery.filter(value => value.category === object);
        bindData(data);
    }
}

// functiion to create html elements that holds the filtered object images
const createChild = (image) => {
    const imageHolder = document.createElement('div');
    imageHolder.classList.add('images');

    const img = document.createElement('img');
    img.src = image.img;

    imageHolder.appendChild(img);
    return imageHolder;
}

// used to append created child to gallery
const bindData = (filteredObject) => {
    galleryImages.innerHTML = ' ';
    filteredObject.forEach((object) => {
        galleryImages.appendChild(createChild(object));
    })
}

filterObject.forEach((filter) => {
    filter.addEventListener('click', (e) => {
        fetchData(filter.textContent.toLocaleLowerCase());
    })
})

window.addEventListener('load', () => {
    fetchData('all');
})