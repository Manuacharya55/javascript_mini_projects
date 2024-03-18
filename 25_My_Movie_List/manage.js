const moviesArray = JSON.parse(localStorage.getItem('mymovielist')) || [];
const allmovies = document.querySelector('.all-movies');
const moviename = document.querySelector('#movie-name');
const movietype = document.querySelector('#movie-type');
const movieposter = document.querySelector('#movie-poster');
const watched = document.querySelector('#watched');
const addMovie = document.querySelector('.add');
const popup = document.querySelector('.popup');
const form = document.querySelector('.movie-details');

let isUpdate = false;
let updateIndex;

function displayForm(){
    form.classList.toggle('view');
}

function clearField() {
    moviename.value = '';
    movietype.value = '';
    movieposter.value = '';
    watched.value = 'no'
}
function displayMovies() {
    allmovies.innerHTML = '';
    moviesArray.forEach((value, index) => {
        allmovies.innerHTML += `<div class="card">
        <div>
        <p class="index">${index + 1}</p>
        <span class="movie-name">${value.moviename}</span>
        <span class="movie-type">${value.movietype}</span>
        <i class="fa-solid fa-pen edit-pen" onclick="editMovie(${index})"></i>
        </div>
        <img src="${value.poster}" alt="" class="poster">
            
        </div>
        </div>`
    })
}

function saveLocalStorage() {
    localStorage.setItem('mymovielist', JSON.stringify(moviesArray))
}

function editMovie(index) {
    displayForm();
    isUpdate = true;
    updateIndex = index;
    moviename.value = moviesArray[index].moviename;
    movietype.value = moviesArray[index].movietype;
    movieposter.value = moviesArray[index].poster;
    watched.value = moviesArray[index].watched;
}

function createObject() {
    const movieobj = {
        moviename: moviename.value,
        movietype: movietype.value,
        poster: movieposter.value,
        watched: watched.value
    }

    return movieobj;
}
addMovie.addEventListener('click', (e) => {
    e.preventDefault();
    if (isUpdate) {
        moviesArray[updateIndex] = createObject();
        saveLocalStorage();
        displayMovies();
        clearField();
        isUpdate = false;
        displayForm();
        alert("updated successfully");
    } else {
        const data = createObject();
        moviesArray.push(data);
        saveLocalStorage();
        displayMovies();
        clearField();
        displayForm();
        alert("movie added successfully");
    }
})

displayMovies();

popup.addEventListener('click',()=>{
    displayForm();
})