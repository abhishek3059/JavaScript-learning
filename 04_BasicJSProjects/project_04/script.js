let rand = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const input = document.querySelector("#guessField");
const prevGuess = document.querySelector(".guesses");
const remGuesses = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");
const par = document.createElement('p');

let previousGuesses = [];
let attempts = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        validateGuess(parseInt(input.value));
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please Enter a valid Number`);
    } else if (guess < 1) {
        alert(`Number entered should be greater than 0`);
    } else if (guess > 100) {
        alert(`Number entered should be less than 101`);
    } else {
        previousGuesses.push(guess);
        if (attempts === 11) {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${rand}`);
            end();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
    input.value = "";
    prevGuess.innerHTML += `${guess}, `;
    attempts++;
    remGuesses.innerHTML = `${11 - attempts}`;
}

function checkGuess(guess) {
    if (guess === rand) {
        displayMessage(`${guess} is the correct number!`);
        end();
    } else if (guess > rand) {
        displayMessage(`${guess} is higher than the random number. Try a lower value.`);
    } else {
        displayMessage(`${guess} is lower than the random number. Try a higher value.`);
    }
}

function end() {
    input.value = '';
    input.setAttribute('disabled', '');
    par.classList.add('button');
    par.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
    par.style.backgroundColor = "green"
    par.style.color = 'red';
    par.style.padding = '10px';
    resultParas.appendChild(par);
    playGame = false;
    restart();
}

function restart() {
    const newGame = document.querySelector('#newGame');
    newGame.addEventListener('click', (e) => {
        rand = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        attempts = 1;
        prevGuess.innerHTML = '';
        remGuesses.innerHTML = `${11 - attempts}`;
        input.removeAttribute('disabled');
        resultParas.removeChild(par);
        playGame = true;
    });
}
