

//Generates and assigns random number to string
const getComputerChoice = () => 
  Math.random() <= 0.3 ? "rock" :
  Math.random() <= 0.6 ? "paper" : "scissors"

//Prompts player to type 
const getHumanChoice = () =>
  prompt("Rock, Paper, or Scissors");

let  humanScore = 0;
let computerScore = 0;

//Logic 
  const playRound = (humanChoice, computerChoice) =>
    humanChoice === computerChoice ? "It's a Tie!": 
    humanChoice === "rock" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "rock" ? 
    "Computer Wins!" : "You Win!";

//Loop to play 5 rounds
    for (let i = 0; i < 5; i++) {
      const humanChoice = getHumanChoice().slice(0).toLowerCase();
      const computerChoice = getComputerChoice();

const results = playRound(humanChoice, computerChoice)

console.log(`Round: ${i + 1}              ${results}`);
console.log(`Your Move: ${humanChoice}`);
console.log(`Computer Move: ${computerChoice}`);

//Adds 1 to respective score based on outcome
    results === "You Win!" ? humanScore++ :
    results === "Computer Wins!" ? computerScore++ : null;

console.log(`Computer Points: ${computerScore}   Your Points: ${humanScore}`);
}