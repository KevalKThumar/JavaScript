let random = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const SubmitButton = document.querySelector('#subt');
const startOver = document.querySelector('.resultParas');
const guesses = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const p = document.createElement('p');

let playGame = true;
let numGuess = 1;
let prevGuess = [];

if (playGame) {
    SubmitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = userInput.value;
        console.log(guess);
        validateInput(guess);
    });
}

function validateInput(guess) {
    if (isNaN(guess)) {
        alert(`${guess} is Not a Number please enter valid input`);
    } else if (guess < 0) {
        alert(`${guess} is less then 0 please enter valid input`);
    } else if (guess === '') {
        alert(`Empty String is not valid please enter valid input`);
    } else if (guess > 101) {
        alert(`${guess} is greater then 100 please enter valid input`);
    } else {
        prevGuess.push(guess);
        if (numGuess >= 10) {
            displayGuess(guess);
            displayMessage(`Game Over,Random Number was ${random}.`);
            endGame();
        } else {
            displayGuess(guess);
            verifyInput(guess);
        }
    }
}

function verifyInput(guess) {
    if (guess == random) {
        displayMessage('Your guess is right');
        endGame();
    } else if (guess < random) {
        displayMessage('Your guess too low keep increases your guess');
    } else if (guess > random) {
        displayMessage('Your guess too high keep decrease your guess');
    }
}
function displayGuess(guess) {
    userInput.value = '';
    guesses.innerHTML += `${guess},`;
    numGuess++;
    remainingGuess.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    displayMessage('');
    p.classList.add('button');
    p.innerHTML = `<h2 id="startGame">tap to Start new Game</h2>`;
    p.style.cursor = 'pointer';
    startOver.appendChild(p);
    playGame = false;
    startGame();
}

function startGame() {
    const startGame = document.getElementById('startGame');
    startGame.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1);
        numGuess = 1;
        remainingGuess.innerHTML = `${11 - numGuess}`;
        guesses.innerHTML = ``;
        prevGuess = [];
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
