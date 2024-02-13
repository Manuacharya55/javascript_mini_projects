const userPlace = document.querySelector('.search-place');
const searchButton = document.querySelector('.search-btn');
const weathericon = document.querySelector('.icon');
const place = document.querySelector('.place');
const main = document.querySelector('.main');
const degree = document.querySelector('.degree');
const humidityval = document.querySelector('.humidity-val');
const windval = document.querySelector('.wind-val');
const humidityIcon =  document.querySelector('.humidity-icon');
const windIcon = document.querySelector('.wind-icon');

searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    fetchWeatherData(userPlace.value)
    userPlace.value = ''
})

const fetchWeatherData = async (countryName) =>{
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${countryName},IN&appid=0968e14c20f97fb5e5b0ae4956876d82`;

    const fetchedData = await fetch(URL);
    const jsonData = await fetchedData.json();

    const weather = jsonData.weather[0].main;
    const icon = jsonData.weather[0].icon;

    const temperature = jsonData.main.temp;
    const humidity = jsonData.main.humidity;

    const wind = jsonData.wind.speed;

    bindData(icon,countryName,weather,temperature,humidity,wind);  
}

const bindData = (icon,countryName,weather,temperature,humidity,wind) =>{
    weathericon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    place.innerHTML = `${countryName},India` 
    main.innerHTML = weather;
    degree.innerHTML = `${Math.floor(temperature- 273.15)}&deg C`;
    humidityval.innerHTML = humidity;
    windval.innerHTML = wind;

    humidityIcon.classList.add('fa-solid','fa-droplet')
    windIcon.classList.add('fa-solid','fa-wind')
}
    

window.addEventListener('load',()=>{
    fetchWeatherData('Bengaluru');
})