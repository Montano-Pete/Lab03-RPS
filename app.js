import { getComputerThrow, rockPaperScissors } from './utils.js';

const button = document.querySelector('#choose-button');
const liveResults = document.querySelector('#current-results');
const totalWins = document.querySelector('#total-wins');
const totalLosses = document.querySelector('#total-losses');
const totalDraws = document.querySelector('#total-draws');


// initialize state
let wins = 0;
let losses = 0;
let draws = 0;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

button.addEventListener('click', () => {
    const userChoice = document.querySelector('input:checked').value;

    const computerChoice = getComputerThrow();

    const userWon = rockPaperScissors(userChoice, computerChoice);

    console.log(userWon);

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

    console.log(wins, losses, draws);



});