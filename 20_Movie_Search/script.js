const search = document.querySelector('.search');
const card = document.querySelector('.card');
const moviename = document.querySelector('#moviename');
search.addEventListener('click', (e) => {
    e.preventDefault();
    fetchMovie(moviename.value)
})

async function fetchMovie(moviename) {
    const data = await fetch(`https://www.omdbapi.com/?t=${moviename}&apikey=2e0f4086`);
    const { Title, Year, Genre, Plot, Language, Poster, imdbRating } = await data.json()
    if (data.Title == "undefined") {
        bindData(Title, Year, Genre, Plot, Language, Poster, imdbRating);
    } else {
        alert("No Movie Found in the Database we will let you know when it arrives");
    }

}


function bindData(Title, Year, Genre, Plot, Language, Poster, imdbRating) {
    card.innerHTML = `
    <img src ="${Poster}">
    <div class="info">
        <p id="title">${Title}</p>
        <p>${Year}</p>
        <p>${Genre}</p>
        <p>${Plot}</p>
        <p>${imdbRating} <i class="fa-solid fa-star"></i></p>
    </div>

    `
}