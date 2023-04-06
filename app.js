// declare variables 
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const computerScoreElement = document.getElementById("computer-score");
const playerScoreElement = document.getElementById("player-score");
const result = document.getElementById("results-choice");
const winner = document.getElementById("winner");

let results;
let playerScore = 0;
let computerScore = 0;
let numberOfTries = 0;
const maxTries = 10; //set max tries to 10 so once a score of 10 is reached the game will reset 

/***
 * declare CHOICES for each selection and hold them in Choices to make it easier and tidier for declaring them and calling them
 */
const CHOICES = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
    spock: 'spock',
    lizard: 'lizard'
}

/**
 * 
 * @param {*} playerChoice 
 * @param {*} computerChoice 
 * @returns 
 * function that will declare the results of the choices when the player selects 
 */
const getResults = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return result.innerHTML = "This round is a tie!";
    } else if (playerChoice === CHOICES.rock) {
        if (computerChoice === CHOICES.lizard) {
            results = "Rock crushes Lizard! Player Wins";
        } else if (computerChoice === CHOICES.scissors) {
            results = "Rock crushes Scissors!! Player Wins";
        } else if (computerChoice === CHOICES.spock) {
            results = "Spock vaporizes Rock!! Computer Wins";
        } else {
            results = "Paper covers Rock! Computer Wins";
        }
    } else if (playerChoice === CHOICES.paper) {
        if (computerChoice === CHOICES.scissors) {
            results = "Scissors cuts Paper! Computer Wins";
        } else if (computerChoice === CHOICES.lizard) {
            results = "Lizard eats Paper! Computer Wins";
        } else if (computerChoice === CHOICES.spock) {
            results = "Paper disproves Spock! Player Wins";
        } else {
            results = "Paper covers Rock! Player Wins"
        }
    } else if (playerChoice === CHOICES.scissors) {
        if (computerChoice === CHOICES.rock) {
            results = "Rock crushes Scissors! Computer Wins";
        } else if (computerChoice === CHOICES.paper) {
            results = "Scissors cuts Paper! Player Wins";
        } else if (computerChoice === CHOICES.lizard) {
            results = "Scissors decapitates Lizard! Player Wins";
        } else {
            results = "Spock smashes Scissors";
        }
    } else if (playerChoice === CHOICES.lizard) {
        if (computerChoice === CHOICES.rock) {
            results = "Rock crushes Lizard! Computer Wins";
        } else if (computerChoice === CHOICES.paper) {
            results = "Lizard eats Paper! Player Wins";
        } else if (computerChoice === CHOICES.scissors) {
            results = "Scissors decapitates Lizard! Computer Wins";
        } else {
            results = "Lizard poisons Spock";
        }
    } else if (playerChoice === CHOICES.spock) {
        if (computerChoice === CHOICES.rock) {
            results = "Spock vaporizes Rock! Player Wins";
        } else if (computerChoice === CHOICES.paper) {
            results = "Paper disproves Spock! Computer Wins";
        } else if (computerChoice === CHOICES.scissors) {
            results = "Spock smashes Scissors! Player Wins";
        } else {
            results = "Lizard poisons Spock! Computer Wins";
        }
    }
    result.innerHTML = results;//prints resluts to the game page
    return results;//returns the results
}
/**
 * function to generate random number for the computer choice 
 * in this function the object.keys method is used to call the array of elemnts in choices
 * math.ranfom is used to random select a number form the keys function
 * @returns 
 */
const getRandomProperty = () => {
    const keys = Object.keys(CHOICES);
    return CHOICES[keys[keys.length * Math.random() << 0]]
}

/**
 * 
 * @param result
 * Function to increment the player score or computer score after 
 * each button click of a choice
 */
const updateScore = (result) => {
    // console.log('result.contains: ', result.includes('Computer'));

    //if the computer wins the computer score get incremented by 1
    if (result.includes('Computer')) {
        computerScore++
    }
    //if the player wins the players score will be incremented by 1 
    if (result.includes('Player')) {
        playerScore++
    }
    
    computerScoreElement.innerHTML = computerScore.toString();
    playerScoreElement.innerHTML = playerScore.toString();
}

/**
 * Reset the game when the max number of tries is reached
 * If statment within function for when the computer wins a a message is printed to the player
 * Also a message is printed when the player wins
 */
const resetGame = () => {
    //if player score is greater than computer score player wins and the message is printed 
    if (playerScore > computerScore) {
        winner.innerHTML = 'Congratulations you won! Make a selection to start again'
    } 
    //if player score is less than computer scroe the player score the computer wins and a message is printed
    else if (playerScore < computerScore) {
        winner.innerHTML = 'Unlucky you lost! Make a selection to start again'
    } 
    //if player score and computer score match its a tie and the message is printed 
    else if (playerScore === computerScore) {
        winner.innerHTML = 'It\'s a tie. Make a selection to start again'
    }

    playerScore = 0;
    computerScore = 0;
    numberOfTries = 0;
    //returnt computer score and print it to the computer score result 
    computerScoreElement.innerHTML = computerScore.toString();
    //return player score and print it to the player score result
    playerScoreElement.innerHTML = playerScore.toString();
}

/**
 * Function to generate the computer choice if the random property equals the object key
 * from the random propert function it will return and output the computer score
 * @returns {randomProperty}
 */
const generateComputerChoice = () => {
    const randomProperty = getRandomProperty();
    return computerChoice.innerHTML = randomProperty
}


/**
 * 
 * @param id
 * Function to control the game when a user clicks a button.
 * it uses the id as a parameter and controls the whoel flow of the game 
 */
const onButtonClick = (id) => {
    if (numberOfTries <= maxTries) {//if number of tries is less than are equal to max tries the game ends
        winner.innerHTML = '';//output the winner to the game
        //declare the variable aiChoce assign it to generate computer choice
        const aiChoice = generateComputerChoice();
        //output player choice to the game and assign it to its id and print it in uppercase
        playerChoice.innerHTML = id.toUpperCase();
        //outcomputer choice to the game and assign it to the aiChocie so it generates the computer choice
        computerChoice.innerHTML = aiChoice.toUpperCase();
        //declare variable result and assign it get results funtion and run it in the game
        const result = getResults(id.toLowerCase(), aiChoice.toLowerCase());
        //update the results in the game
        updateScore(result);
        numberOfTries++;
    } else {
        //if the game has reached 10 tries the game will restart
        resetGame();
    }
}