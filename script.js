let randomNumber = Math.floor(Math.random() * 100) +1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess()
{
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'intentos anteriores: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) 
    {
        lastResult.textContent = 'Wow.. Felicidades, has adivinado';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    }

    else if (guessCount === 10)
    {
        lastResult.textContent = 'se han terminado tus intentos, fin del juego';
        setGameOver();
    }
    else 
    {
        lastResult.textContent = 'Haz fallado, intenta de nuevo.';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber)
        {
            lowOrHi.textContent = 'Pista: Tu número es menor';
        }
        else if (userGuess > randomNumber)
        {
            lowOrHi.textContent = 'Pista: Tu número es mayor';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver()
{
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Vamos una vez más!';
    resetButton.style.cssText = 'background-color: #44002F; color: white; textAlign: center; padding: 7px; border: none; border-radius: 25px;';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame()
{
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for ( let i = 0; i < resetParas.length; i++)
    {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) +1;
}