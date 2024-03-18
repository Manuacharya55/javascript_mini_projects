const moviesArray = JSON.parse(localStorage.getItem('mymovielist')) || [];
const allmovies = document.querySelector('.all-movies');
let count = 1;
function createCard(value,index){
    const data = `<div class="card">
    <div>
    <p class="index">${count}</p>
    
    <span class="movie-name">${value.moviename}</span>
    <span class="movie-type">${value.movietype}</span>
    
    </div>
    <img src="${value.poster}" alt="" class="poster">
    </div>`;

    count++;
    return data;
}

function displayWatched(){
    moviesArray.forEach((value, index) => {
        if(value.watched === 'no'){
            allmovies.innerHTML += createCard(value,index);
        }
    })
}

displayWatched();


