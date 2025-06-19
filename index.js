class Game {

    constructor() {
        this.humanScore = 0
        this.computerScore = 0;
        this.resultDiv = document.getElementById('result');
        this.scoreDiv = document.getElementById('score');

        document.getElementById('rock').addEventListener('click', () => this.playRound('rock'));
        document.getElementById('paper').addEventListener('click', () => this.playRound('paper'));
        document.getElementById('scissors').addEventListener('click', () => this.playRound('scissors'));
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

    playRound(humanChoice) {
        const computerChoice = this.getComputerChoice();
        let result;

        if (humanChoice === computerChoice) {
            result = "Draw!";
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            this.humanScore++;
            result = `¡Wins! ${humanChoice} wins to ${computerChoice}`;
        } else {
            this.computerScore++;
            result = `¡Loses! ${computerChoice} wins to ${humanChoice}`;
        }

        this.updateScore();
        this.resultDiv.textContent = result;

        if (this.humanScore === 5 || this.computerScore === 5) {
            this.declareWinner();
        }
    }

    updateScore() {
        this.scoreDiv.textContent = `Human: ${this.humanScore} - Computer: ${this.computerScore}`;
    }

    declareWinner() {
        const finalResult = this.humanScore === 5 ? "Human wins!" : "Computer wins!";
        this.resultDiv.textContent = finalResult;
        this.humanScore = 0;
        this.computerScore = 0;
        this.updateScore();
    }
  
}

const game = new Game();
