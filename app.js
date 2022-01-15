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
      alert(`Invalid choice! We choose ${DEFAULT_VALUE} for you`);
      return DEFAULT_VALUE;
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
const getWinner = (cChoice, pChoice) => {
  if(cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
    alert(`computer choose ${cChoice}`);
    return RESULT_PLAYER_WIN
  } else {
    alert(`computer choose ${cChoice}`);
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
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner);
    gameRunning = false;
});
