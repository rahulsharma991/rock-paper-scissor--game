const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_VALUE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_COMPUTER_WIN = 'COMPUTER WIN';
const RESULT_PLAYER_WIN = 'PLAYER WIN';

let gameRunning = false;


const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} and ${SCISSORS}`, '').toUpperCase();
  if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      return 
  }
  return selection;
}

const getComputerChoice = () =>{
  let randomValue = Math.random();
  if(randomValue < 0.34) {
    return ROCK;
  } else if(randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}
const getWinner = (cChoice, pChoice = DEFAULT_VALUE) => {
  if(cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
    return RESULT_PLAYER_WIN
  } else {
    return RESULT_COMPUTER_WIN
  }
}
startGameBtn.addEventListener("click", () => {
  if(gameRunning) {
      return 
  }
  console.log("Game is running");
  gameRunning = true
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if(playerChoice) {
      winner = getWinner(computerChoice, playerChoice);
    } else {
      winner = getWinner(computerChoice);
    }
    let message = `You picked ${playerChoice || DEFAULT_VALUE} and computer picked the ${computerChoice} therefore you ` 
    if(winner ===  RESULT_DRAW) {
      message = message + 'had a draw';
    } else if(winner === RESULT_COMPUTER_WIN) {
      message = message + 'lost!'
    } else {
      message = message + 'won';
    }
    alert(message);
    gameRunning = false;
});
