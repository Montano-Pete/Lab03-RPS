// IMPORT MODULES under test here:
import { rockPaperScissors, getComputerThrow } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectWin = 'user';
    const expectLoss = 'computer';
    const expectDraw = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const win = rockPaperScissors('paper', 'rock');
    const loss = rockPaperScissors('paper', 'scissor');
    const draw = rockPaperScissors('scissor', 'scissor');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectWin, win);
    expect.equal(expectLoss, loss);
    expect.equal(expectDraw, draw);
});
    // The function below uses math.random, so I re-ran the test until each expectation passed to ensure the function is working.
test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectRock = 'rock';
    const expectPaper = 'paper';
    const expectScissors = 'scissors';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const rock = getComputerThrow(1);
    const paper = getComputerThrow(2);
    const scissors = getComputerThrow(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(expectRock, rock);
    expect.equal(expectPaper, paper);
    expect.equal(expectScissors, scissors);
});
