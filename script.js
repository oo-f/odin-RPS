


const getComputerChoice = () => 
  Math.random() <= 0.3 ? "rock" :
  Math.random() <= 0.6 ? "paper" : "scissors"



const getHumanChoice = () =>
  prompt("Rock, Paper, or Scissors");

const humanScore = 0;
const computerScore = 0;

const playRound = (humanChoice, computerChoice) =>
humanChoice === computerChoice ? "It's a Tie!": 
humanChoice === "rock" && computerChoice === "paper" ||
humanChoice === "paper" && computerChoice === "scissors" ||
humanChoice === "scissors" && computerChoice === "rock" ? "Computer Wins!!" :
"You Win!";


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice, computerChoice));
console.log(`Your Move: ${humanChoice}`);
console.log(`Computer Move: ${computerChoice}`);