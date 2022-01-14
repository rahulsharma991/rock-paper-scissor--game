const startGameBtn = document.getElementById("start-game-btn");

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_VALUE = ROCK;
let gameRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} and ${SCISSORS}`, '').toUpperCase();
  if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
      alert(`Invalid choice! We choose ${DEFAULT_VALUE} for you`);
      return DEFAULT_VALUE;
  }
  return selection;
}

startGameBtn.addEventListener("click", () => {
  if(gameRunning) {
      return 
  }
  console.log("Game is running");
  gameRunning = true
    const playerChoice = getPlayerChoice();
    console.log(playerChoice);
});
