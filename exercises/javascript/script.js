function getComputerChoice() {

    let rand = Math.floor(Math.random() * 3);
    let choice;

    switch (rand) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "scissors";
            break;
        case 2:
            choice = "paper";
            break;
        default:
            choice = "hopbala";
    }
    return choice;
}

function getHumanChoice() {

    let h_choice = prompt("Rock, paper or scissors?");

    return h_choice;
}
let humanScore = 0;
let computerScore = 0;


// console.log(getHumanChoice());
// console.log(getComputerChoice());
const container = document.querySelector(".container");

function playRound(humanChoice, computerChoice) {


    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        container.textContent = "Thats a draw!"
    } else {
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                container.textContent = "You won!";
                humanScore++;
            } else {
                container.textContent = "You lost!";
                computerScore++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "paper") {
                container.textContent = "You won!";
                humanScore++;
            } else {
                container.textContent = "You lost!";
                computerScore++;
            }
        } else {
            if (computerChoice == "rock") {
                container.textContent = "You won!";
                humanScore++;
            } else {
                container.textContent = "You lost!";
                computerScore++;
            }
        }
    }
    
   


    if(humanScore == 5 || computerScore == 5){
        playGame();
       
    }
    // console.log(humanChoice + " ", computerChoice)
    // console.log("Human score: ", humanScore, " Computer score: ", computerScore);
}



function playGame() {

  
    if (humanScore > computerScore) {
        container.textContent = "Final: Human wins!"

    } else if (computerScore > humanScore) {
        container.textContent ="Final: Computer wins!";
    } else {
        container.textContent ="Final: It is a draw!";
    }

}




const rock_button = document.querySelector("#rock");
const scissor_button = document.querySelector("#scissors");
const paper_button = document.querySelector("#paper");



rock_button.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});


paper_button.addEventListener("click", () => {
    playRound("paper",getComputerChoice());
});

scissor_button.addEventListener("click", () => {
    playRound("scissors",getComputerChoice());
});





