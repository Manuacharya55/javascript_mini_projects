const feedBackArray = JSON.parse(localStorage.getItem('feedback')) || [];

const FIRSTNAME = document.querySelector('#first-name');
const PHONENUMBER = document.querySelector('#ph-number');
const EMAIL = document.querySelector('#email');
const USERFEEDBACK = document.querySelector('#feedback');
const submit = document.querySelector('.submit');

const removeClass = (target, classname) => {
    target.classList.remove(classname)
}

const addClass = (target, classname) => {
    target.classList.add(classname)
}

const setAndDeleteClass = (target,firstClass,secondClass) =>{
    removeClass(target,firstClass);
    addClass(target, secondClass)
}

const validateUserFeedback = (firstname, phnumber, email, userFeedback) => {

    // validating the username input
    if (firstname === '') {
        setAndDeleteClass(FIRSTNAME,'green','red')
    } else {
        setAndDeleteClass(FIRSTNAME,'red','green')
    }

    // validating the userphonenumber input
    if (phnumber.length !== 10) {
        setAndDeleteClass(PHONENUMBER,'green','red');
    } else {
        setAndDeleteClass(PHONENUMBER,'red','green');
    }

    // validating the useremail input
    if (!email.endsWith('.com')) {
        setAndDeleteClass(EMAIL,'green','red');
    } else {
        setAndDeleteClass(EMAIL,'red','green');
    }

    // validating the userFeedback input
    if (userFeedback === "") {
        setAndDeleteClass(USERFEEDBACK,'green','red');
    } else {
        setAndDeleteClass(USERFEEDBACK,'red','green');
    }

    document.querySelectorAll('.green').length === 4 ? saveFeedBack(firstname,phnumber,email,userFeedback) : ''
}

const saveFeedBack = (name,phnumber,email,userFeedback) =>{
    let feedbackObj = {
        name,
        phnumber,
        email,
        userFeedback
    }

    feedBackArray.push(feedbackObj);
    localStorage.setItem('feedback',JSON.stringify(feedBackArray));
    alert('Submited Successfully');
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    validateUserFeedback(FIRSTNAME.value,
        PHONENUMBER.value,
        EMAIL.value,
        USERFEEDBACK.value)
})