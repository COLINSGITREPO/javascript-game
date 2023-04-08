// Import JSDOM from the 'jsdom' package
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Set up a fake DOM environment
const fakeDom = () => {
  const dom = new JSDOM(
    `<!doctype html>
      <html>
        <body>
          <div>
            <p id="player-choice"></p>
            <p id="computer-choice"></p>
            <p id="winner"></p>
            <div id="results-choice"></div>
          </div>
        </body>
      </html>`
    );

  global.window = dom.window;
  global.document = dom.window.document;
};

fakeDom();

// Import the functions to test
const assert = require('assert');
const { onButtonClick, getResults } = require('../assets/js/app.js');

describe('onButtonClick', () => {
  beforeEach(() => {
    fakeDom();
  });

  it('should return "Player wins" when player chooses "rock" and computer chooses "scissors"', () => {
    const playerChoice = 'rock';
    const computerChoice = 'scissors';
    const expectedResult = 'Rock crushes Scissors!! Player Wins';

    const result = getResults(playerChoice, computerChoice);

    assert.strictEqual(result, expectedResult);
    assert.strictEqual(result, document.getElementById("results-choice").innerHTML);
  });

  it('should return "Computer wins" when player chooses "rock" and computer chooses "paper"', () => {
    const playerChoice = 'rock';
    const computerChoice = 'paper';
    const expectedResult = 'Paper covers Rock! Computer Wins';

    const result = getResults(playerChoice, computerChoice);

    assert.strictEqual(result, expectedResult);
    assert.strictEqual(result, document.getElementById("results-choice").innerHTML);
  });

  it('should return "Tie" when player chooses "rock" and computer also chooses "rock"', () => {
    const playerChoice = 'rock';
    const computerChoice = 'rock';
    const expectedResult = 'This round is a tie!';

    const result = getResults(playerChoice, computerChoice);

    assert.strictEqual(result, expectedResult);
    assert.strictEqual(result, document.getElementById("results-choice").innerHTML);
  });

  // Add more tests here for the remaining choices: paper, scissors, lizard, and spock
});


