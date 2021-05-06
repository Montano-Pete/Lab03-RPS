export function rockPaperScissors(userChoice, computerChoice) {
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'user';
    } else if (userChoice === computerChoice) {
        return 'draw';
    } else {
        return 'computer';
    }
}

export function getComputerThrow() {
    const randomNumber = Math.ceil(Math.random() * 3);
    let computerThrow;

    if (randomNumber === 3) {
        computerThrow = 'rock';
    } else if (randomNumber === 2) {
        computerThrow = 'paper';
    } else {
        computerThrow = 'scissors';
    } 
    
    return computerThrow;
}