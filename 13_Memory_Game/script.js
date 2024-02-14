const array = [
    {
        dataname: 'img1',
        src: 'img-1.jpg'
    },
    {
        dataname: 'img2',
        src: 'img-2.jpg'
    },
    {
        dataname: 'img3',
        src: 'img-3.jpg'
    },
    {
        dataname: 'img4',
        src: 'img-4.jpg'
    },
    {
        dataname: 'img5',
        src: 'img-5.jpg'
    },
    {
        dataname: 'img6',
        src: 'img-6.jpg'
    }, {
        dataname: 'img1',
        src: 'img-1.jpg'
    },
    {
        dataname: 'img2',
        src: 'img-2.jpg'
    },
    {
        dataname: 'img3',
        src: 'img-3.jpg'
    },
    {
        dataname: 'img4',
        src: 'img-4.jpg'
    },
    {
        dataname: 'img5',
        src: 'img-5.jpg'
    },
    {
        dataname: 'img6',
        src: 'img-6.jpg'
    }
]

const board = document.querySelector('.board');
let count = 0;
const reset = document.querySelector('.reset');

// Fisher Yates Shuffle Algorithm
const shuffleAlgorithm = (array) => {
    let temp;
    for (let i = array.length - 1; i > 0; i--) {
        const randomNumber = Math.ceil(Math.random() * (array.length - 1));
        temp = array[randomNumber];
        array[randomNumber] = array[i];
        array[i] = temp;
    }

}


const createElement = (element) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.setAttribute('dataset', element.dataname);

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const frontDiv = document.createElement('div');
    frontDiv.classList.add('front');

    const backDiv = document.createElement('div');
    backDiv.classList.add('back');
    backDiv.style.backgroundImage = `url('./images/${element.src}')`

    cardInner.appendChild(frontDiv)
    cardInner.appendChild(backDiv)
    cardDiv.append(cardInner)

    return cardDiv
}


// creating a card for game
const createCard = () => {
    board.innerHTML = ''

    shuffleAlgorithm(array);

    array.forEach((element) => {
        board.append(createElement(element))
    })
}

createCard();
reset.addEventListener('click', () => {
    window.location.href = 'index.html';
})

const cards = document.querySelectorAll('.card');

cards.forEach((value) => {
    value.addEventListener('click', (e) => {
        if (count < 3) {
            value.classList.add('selected-card')
            count++;
        }

        if (count === 2) {
            const val = document.querySelectorAll('.selected-card');
            const card1 = val[1].getAttribute('dataset')
            const card2 = val[0].getAttribute('dataset')
            if (card1 === card2) {
                cardMatched(val);
            } else {
                setTimeout(()=>{
                    unMatch(val)
                }, 500)
            }
            count = 0;
        }
    })
})

const cardMatched = (val) => {
    val.forEach((val) => {
        val.removeEventListener('click', () => { })
        val.classList.remove('selected-card');
        val.classList.add('finished')
    })
}

const unMatch =(val) => {
    val[1].classList.remove('selected-card');
    val[0].classList.remove('selected-card');
}