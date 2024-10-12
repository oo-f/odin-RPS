// Function to generate a random computer choice
const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// Function to update the match tally (number of best-of-5 matches won)
const updateMatchTally = () => {
  const matchTallyElement = document.getElementById("match-tally");
  let matchWins = parseInt(matchTallyElement.innerText) || 0; // Get the current tally
  matchWins++; // Increment the tally for the next match win
  matchTallyElement.innerText = matchWins; // Update the match tally
};

// Function to handle round results and update scores
const playRound = (humanChoice, computerChoice) => {
  let result;
  if (humanChoice === computerChoice) {
    result = "Tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    result = "Point for Computer";
    computerScore++;
  } else {
    result = "Point for You";
    humanScore++;
  }

  // Update UI with choices and result
  updateUI(humanChoice, computerChoice, result);

  // Check for match winner (first to 5 rounds wins a match)
  if (humanScore === 5) {
    updateMatchTally(); // Increment the match tally
    showModal("YOU ARE THE CHAMPION!");
    resetScores(); // Reset scores for next match
  } else if (computerScore === 5) {
    showModal("COMPUTER IS THE CHAMPION!");
    resetScores(); // Reset scores for next match
  }
};

// Modal logic to display results
const showModal = (message) => {
  const modal = document.getElementById("customModal");
  const modalMessage = document.getElementById("modalMessage");
  const closeModal = document.querySelector(".modal-close");

  modalMessage.textContent = message; // Set the message in the modal
  modal.style.display = "block"; // Show the modal

  // Close the modal when clicking the "X" button
  closeModal.onclick = () => {
    modal.style.display = "none";
  };

  // Close the modal if the user clicks outside the modal content
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

// Function to update the UI elements
const updateUI = (humanChoice, computerChoice, roundResult) => {
  // Update the moves and result
  document.getElementById("humanChoice").innerText = humanChoice ? `Your Move: ${humanChoice}` : "";
  document.getElementById("computerChoice").innerText = computerChoice ? `Computer Move: ${computerChoice}` : "";
  document.getElementById("roundWinner").innerText = roundResult;

  // Add 'visible' class to make the content appear
  if (humanChoice || computerChoice || roundResult) {
    document.getElementById("humanChoice").classList.add("visible");
    document.getElementById("computerChoice").classList.add("visible");
    document.getElementById("roundWinner").classList.add("visible");
  }

  // Update the scores
  document.getElementById("runningHumanScore").innerText = humanScore;
  document.getElementById("runningComputerScore").innerText = computerScore;
};

// Function to reset the round scores (after a match is won)
const resetScores = () => {
  humanScore = 0;
  computerScore = 0;
  updateUI("", "", "");

  // Remove the 'visible' class
  document.getElementById("humanChoice").classList.remove("visible");
  document.getElementById("computerChoice").classList.remove("visible");
  document.getElementById("roundWinner").classList.remove("visible");
};

// Score variables
let humanScore = 0;
let computerScore = 0;

// Event listeners for game buttons
document.querySelectorAll(".game-btn").forEach(button => {
  button.addEventListener("click", (event) => {
    const humanChoice = event.target.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

// Function to reset the round scores and match tally
const resetGame = () => {
  humanScore = 0;
  computerScore = 0;
  updateUI("", "", "");

  // Remove the 'visible' class
  document.getElementById("humanChoice").classList.remove("visible");
  document.getElementById("computerChoice").classList.remove("visible");
  document.getElementById("roundWinner").classList.remove("visible");

  // Reset the match tally
  const matchTallyElement = document.getElementById("match-tally");
  matchTallyElement.innerText = '0'; // Reset match tally to 0
};

// Reset button logic
document.getElementById("reset").addEventListener("click", () => {
  resetGame(); // Call the resetGame function when the button is clicked
});