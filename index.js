class Game {

  constructor() {
      this.humanScore = 0
      this.computerScore = 0;
  }
    

  getComputerChoice() {
      const randomNumber = Math.random();
      if (randomNumber <= 0.33) {
          return "rock";
      } else if (randomNumber < 0.66) {
          return "paper";
      } else {
          return "sicssors";
      }
  }

  getHumanChoice() {
    console.log("Choose your option:");
    console.log("1. rock");
    console.log("2. Paper");
    console.log("3. Scissors");
    
    const choice = prompt("Enter your choice: ");

    switch (choice) {
        case '1':
            return "rock";
        case '2':
            return "paper";
        case '3':
            return "scissors";
        default:
            console.log("Invalid option. Please try again.");
            return this.getHumanChoice(); 
    }
  }


  playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
          console.log("It's a tie!");
      } else if (
          (humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "scissors" && computerChoice === "paper")
      ) {
          this.humanScore++;
          console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      } else {
          this.computerScore++;
          console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      }
  }


  playGame() {
      for (let i = 0; i < 5; i++) {
          const humanSelection = this.getHumanChoice();
          const computerSelection = this.getComputerChoice();
          this.playRound(humanSelection, computerSelection);
      }
      
      if (this.humanScore > this.computerScore) {
          console.log(`You win the game! Final Score: You ${this.humanScore} - Computer ${this.computerScore}`);
      } else if (this.humanScore < this.computerScore) {
          console.log(`You lose the game! Final Score: You ${this.humanScore} - Computer ${this.computerScore}`);
      } else {
          console.log(`The game is a tie! Final Score: You ${this.humanScore} - Computer ${this.computerScore}`);
      }
  }
}

const game = new Game();
game.playGame();