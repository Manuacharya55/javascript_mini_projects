const daysContainer = document.querySelector('.days');
const hoursContainer = document.querySelector('.hours');
const minutesContainer = document.querySelector('.minutes');
const secondsContainer = document.querySelector('.seconds');


const calculateRemainingDays = (userDate) => {
    const eventDate = new Date(userDate).getTime();
    const todaysDate = new Date().getTime();
    const remainingDays = eventDate - todaysDate;

    const daysRemaining = Math.floor(remainingDays / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hoursRemaining = Math.floor((remainingDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutesRemaining = Math.floor((remainingDays % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const secondsRemaining = Math.floor((remainingDays % (1000 * 60)) / 1000).toString().padStart(2, '0');
    
    bindData(daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining)
}

const bindData = (days, hours, minutes, seconds) => {
    daysContainer.innerHTML = days
    hoursContainer.innerHTML = hours
    minutesContainer.innerHTML = minutes
    secondsContainer.innerHTML = seconds
}

const selectedDate = document.querySelector('#selectDate');
const minDate = new Date().toISOString().split('T')[0];

const isValidDate = (selectedDate) => {
    const userDate = new Date(selectedDate).getTime();
    const conditionDate = new Date(minDate).getTime();
    return userDate >= conditionDate;
};

selectedDate.addEventListener('input', () => {
    if (isValidDate(selectedDate.value)) {
        setInterval(() => {
            calculateRemainingDays(selectedDate.value);
        }, 1000);
    } else {
        alert("Invalid Date Selection");
    }
});