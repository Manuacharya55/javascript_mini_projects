const quizQuestionsArray = [
    {
        question: 'Who is the main character in SpongeBob SquarePants?',
        option1: 'Patrick Star',
        option2: 'Squidward Tentacles',
        option3: 'Sandy Cheeks',
        option4: 'SpongeBob SquarePants',
        answer: 'SpongeBob SquarePants'
    },
    {
        question: 'What is the name of the animated movie featuring a rat who aspires to be a chef?',
        option1: 'Finding Nemo',
        option2: 'Toy Story',
        option3: 'Ratatouille',
        option4: 'Up',
        answer: 'Ratatouille'
    },
    {
        question: 'Which cartoon character lives in a pineapple under the sea?',
        option1: 'Scooby-Doo',
        option2: 'Tom and Jerry',
        option3: 'Bugs Bunny',
        option4: 'SpongeBob SquarePants',
        answer: 'SpongeBob SquarePants'
    },
    {
        question: 'In "Tom and Jerry," what type of animal is Tom?',
        option1: 'Mouse',
        option2: 'Cat',
        option3: 'Dog',
        option4: 'Bird',
        answer: 'Cat'
    },
    {
        question: 'What is the name of the family in "The Simpsons"?',
        option1: 'The Johnsons',
        option2: 'The Smiths',
        option3: 'The Simpsons',
        option4: 'The Parkers',
        answer: 'The Simpsons'
    },
    {
        question: 'Which cartoon features a boy and his robot dog exploring the post-apocalyptic world?',
        option1: 'Adventure Time',
        option2: 'Regular Show',
        option3: 'Rick and Morty',
        option4: 'The Amazing World of Gumball',
        answer: 'Adventure Time'
    },
    {
        question: 'What is the name of the blue, fast hedgehog in video games and cartoons?',
        option1: 'Mario',
        option2: 'Sonic',
        option3: 'Crash',
        option4: 'Spyro',
        answer: 'Sonic'
    },
    {
        question: 'Which Disney princess has a chameleon sidekick named Pascal?',
        option1: 'Cinderella',
        option2: 'Ariel',
        option3: 'Rapunzel',
        option4: 'Belle',
        answer: 'Rapunzel'
    },
    {
        question: 'In "Pokémon," what is the name of the main character who wants to become a Pokémon Master?',
        option1: 'Ash Ketchum',
        option2: 'Gary Oak',
        option3: 'Brock',
        option4: 'Misty',
        answer: 'Ash Ketchum'
    },
    {
        question: 'Who is the antagonist in "The Lion King"?',
        option1: 'Simba',
        option2: 'Mufasa',
        option3: 'Scar',
        option4: 'Timon',
        answer: 'Scar'
    }
];

const question = document.querySelector('.question');
const options = document.querySelectorAll('.option');

const loadQuestion = () => {
    const randomNumber = Math.round(Math.random() * 9);
    const questionObj = quizQuestionsArray[randomNumber];
    displayQuestion(questionObj, randomNumber);
}

const displayQuestion = (object, index) => {
    question.innerHTML = object.question;
    question.setAttribute('id', index)
    options.forEach((option, i) => {
        // option.innerHTML = object[option1,option2,option3];
        option.innerHTML = object[`option${i + 1}`];
    });
}

const removeClass = () => {
    options.forEach((option) => {
        option.classList.remove('red');
        option.classList.remove('green');
    })
}

const reloadGame = () => {
    setTimeout(() => {
        removeClass();
        loadQuestion()
    }, 3000)
}


options.forEach((option) => {
    let click = 0;
    option.addEventListener('click', () => {
            if (option.innerHTML === quizQuestionsArray[question.id].answer) {
                option.classList.add('green');
                alert('YOU GUESSED IT RIGHT')
            } else {
                options.forEach((rightAnswer) => {
                    if (rightAnswer.innerHTML === quizQuestionsArray[question.id].answer) rightAnswer.classList.add('green');
                })
                option.classList.add('red');
                alert('YOU GUESSED IT WRONG')
            }
            reloadGame();
    })
})

window.addEventListener('load', loadQuestion)