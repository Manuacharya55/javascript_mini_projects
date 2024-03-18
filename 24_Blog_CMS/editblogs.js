const blogs = document.querySelector('.all-blogs');
const blogArr = JSON.parse(localStorage.getItem('blogarray')) || [];
const form = document.querySelector('.form-holder');
const closewindow = document.querySelector('.fa-xmark');
const title = document.querySelector('#title');
const topic = document.querySelector('#topic');
const description = document.querySelector('#desc');
const credentials = document.querySelector('#credentials');
const coverimage = document.querySelector('#cover-img');
const subimg1 = document.querySelector('#sub-img1');
const subimg2 = document.querySelector('#sub-img2');
const update = document.querySelector('.update');
let blogIndex;

function displayPost(){
    blogs.innerHTML =''
    blogArr.forEach((value, index) => {
        blogs.innerHTML += `<div class ="blog-card">
        <img src="${value.coverimage}" class="blog-img">
        <div class="blog-detail">
        <p>Title : ${value.title}</p>
        <p>Topic : ${value.topic}</p>
        <p>Credentials : ${value.credentials}</p>
        <i class="fa-solid fa-trash" onclick = "deleteBlog(${index})"></i>
        <i class="fa-solid fa-pen" onclick ="display(${index})"></i></div>
            </div>`
    })
}

function display(blogpost) {
    form.style.display = 'block';
    blogIndex = blogpost;
    title.value = blogArr[blogpost].title;
    topic.value = blogArr[blogpost].topic;
    description.value = blogArr[blogpost].description;
    credentials.value = blogArr[blogpost].credentials;
    coverimage.value = blogArr[blogpost].coverimage;
    subimg1.value = blogArr[blogpost].subimg1;
    subimg2.value = blogArr[blogpost].subimg2;
}

function deleteBlog(index){
    blogArr.splice(index,1);
    localStorage.setItem('blogarray',JSON.stringify(blogArr));
    alert('deleted successfully');
    displayPost()
}

closewindow.addEventListener('click', () => {
    form.style.display = 'none';
})

update.addEventListener('click', () => {
    blogArr[blogIndex] = {
        title: title.value,
        topic: topic.value,
        description: description.value,
        credentials: credentials.value,
        coverimage: coverimage.value,
        subimg1: subimg1.value,
        subimg2: subimg2.value
    }

    localStorage.setItem('blogarray',JSON.stringify(blogArr));
    form.style.display = 'none';
    alert('updated successfully')
})

displayPost();