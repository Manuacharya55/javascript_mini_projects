
const blogholder = document.querySelector('.blog-holder');
const blogArray = JSON.parse(localStorage.getItem('blogarray')) || [];

function displayPosts() {
    blogholder.innerHTML = '';
    blogArray.forEach((value,index) => {
        blogholder.innerHTML += `<div class="blog" id="${index}">
        <img src="${value.coverimage}"
            alt="" class="blog-image">
        <div class="blog-content">
            <p>${value.title}</p>

            <div class="other-details">
                <span class="date">${value.date}</span>
                <span class="topic">${value.topic}</span>
            </div>
        </div>
    </div>
    `
    })
}

displayPosts();
const blog = document.querySelectorAll('.blog');
blog.forEach((blogs) => {
    blogs.addEventListener('click', () => {
        window.location.href = `details.html?id=${blogs.id}`
    })
})