import { getComputerThrow, rockPaperScissors } from './utils.js';

const button = document.querySelector('#choose-button');
const resetButton = document.querySelector('#reset-button');
const liveResults = document.querySelector('#current-results');
const totalWins = document.querySelector('#total-wins');
const totalLosses = document.querySelector('#total-losses');
const totalDraws = document.querySelector('#total-draws');

let wins = 0;
let losses = 0;
let draws = 0;

button.addEventListener('click', () => {
    liveResults.style.display = 'block';
    totalWins.style.display = 'block';
    totalLosses.style.display = 'block';
    totalDraws.style.display = 'block';
    megaFunction(); 
 
});



resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;

    liveResults.style.display = 'none';
    totalWins.style.display = 'none';
    totalLosses.style.display = 'none';
    totalDraws.style.display = 'none';

    totalWins.textContent = '';
    totalLosses.textContent = '';
    totalDraws.textContent = '';
});







// inner working of this function 
function megaFunction() {

    if (document.querySelector('input:checked') === null) {
        alert('Please select one of the three options.');
    } 

    const userChoice = document.querySelector('input:checked').value;
    const computerChoice = getComputerThrow();
    const userWon = rockPaperScissors(userChoice, computerChoice);
    if (userWon === 'user') {
        wins++;
        liveResults.textContent = 'You won!';
        totalWins.textContent = `Your total wins are ${wins}`;
    } else if (userWon === 'computer') {
        losses++;
        liveResults.textContent = 'You lost!';
        totalLosses.textContent = `Your total losses are ${losses}`;
    } else if (userWon === 'draw') {
        draws++;
        liveResults.textContent = 'A draw!';
        totalDraws.textContent = `Your total draws are ${draws}`;
    }
}