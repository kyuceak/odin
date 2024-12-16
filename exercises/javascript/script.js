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


function playRound(humanChoice, computerChoice) {


    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("Thats a draw!");
    } else {
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                console.log("You won!");
                humanScore++;
            } else {
                console.log("You lost!");
                computerScore++;
            }
        } else if (humanChoice == "scissors") {
            if (computerChoice == "paper") {
                console.log("You won!");
                humanScore++;
            } else {
                console.log("You lost!");
                computerScore++;
            }
        } else {
            if (computerChoice == "rock") {
                console.log("You won!");
                humanScore++;
            } else {
                console.log("You lost!");
                computerScore++;
            }
        }
    }
    // console.log(humanChoice + " ", computerChoice)
    // console.log("Human score: ", humanScore, " Computer score: ", computerScore);
}



function playGame() {

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("Final: Human wins!");

    } else if (computerScore > humanScore) {
        console.log("Final: Computer wins!");
    } else {
        console.log("Final: It is a draw!");
    }

}


playGame();