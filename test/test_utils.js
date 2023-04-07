
// Import JSDOM from the 'jsdom' package
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


// Set up a fake DOM environment
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = document;

// Now you can import and test the code that uses the document object
const assert = require('assert');
const { onButtonClick } = require('../assets/js/app.js');
const { getResults } = require('../assets/js/app.js');


describe('onButtonClick', () => {
    it('should return "Player wins" when player chooses "rock" and computer chooses "scissors"', () => {
      const playerChoice = 'rock';
      const computerChoice = 'scissors';
      const result = getResults(playerChoice, computerChoice);
      assert.strictEqual(result, 'Player wins');
    });
    it('should return "Computer wins" when player chooses "rock" and computer chooses "paper"', () => {
      const playerChoice = 'rock';
      const computerChoice = 'paper';
      const result = getResults(playerChoice, computerChoice);
      assert.strictEqual(result, 'Computer wins');
    });
    it('should return "Tie" when player chooses "rock" and computer also chooses "rock"', () => {
      const playerChoice = 'rock';
      const computerChoice = 'rock';
      const result = getResults(playerChoice, computerChoice);
      assert.strictEqual(result, 'Tie');
    });
    // Add more tests here for the remaining choices: paper, scissors, lizard, and spock
  });

  