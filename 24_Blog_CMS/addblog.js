const title = document.querySelector('#title');
const topic = document.querySelector('#topic');
const description = document.querySelector('#desc');
const credentials = document.querySelector('#credentials');
const coverimage = document.querySelector('#cover-img');
const subimg1 = document.querySelector('#sub-img1');
const subimg2 = document.querySelector('#sub-img2');
const subimg3 = document.querySelector('#sub-img3');

const addBlogArray = JSON.parse(localStorage.getItem('blogarray')) || [];

document.querySelector('.add').addEventListener('click', (e) => {
    e.preventDefault();
    const today = new Date();
    const month = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
    const obj = {
        title:title.value,
        topic:topic.value,
        description:description.value,
        credentials:credentials.value,
        coverimage:coverimage.value,
        subimg1:subimg1.value,
        subimg2:subimg2.value,
        date : month
    }

    addBlogArray.push(obj);
    localStorage.setItem('blogarray',JSON.stringify(addBlogArray));
    alert("Blog Added")
})

