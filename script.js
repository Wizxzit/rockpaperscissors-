function getComputerChoice() {
    let choice = Math.random() * 3;
    console.log(choice);
    if (choice <= 1) {
        return "rock";
    } else if (choice <= 2) {
        return "paper";
    } else {
        return "scissors"
    }
};

function getHumanChoice() {
    let word = prompt("Pick rock, paper, or scissors:")
    let value = (word.toUpperCase()).toLowerCase();
    return value;
};

const body = document.body;
const infoText = document.createElement("div");
infoText.textContent ="To play a game of Rock-Paper-Scissors click on a button."
body.insertBefore("infoText", "container");

// function playGame() {
//     let humanScore = 0, computerScore = 0;
//     function playRound(comp, human) {
//         human = getHumanChoice();
//         comp = getComputerChoice();
//         if (human === comp) {
//             return console.log(`computer chose ${comp}, you tied`);
//         } else if ((human == "scissors" && comp == "rock") || (human == "rock" && comp == "paper") || (human == "paper" && comp == "scissors")) {
//             ++computerScore;
//             return console.log(`computer chose ${comp}, you lost. Computer gained 1 point.`);
//         } else {
//             ++humanScore;
//             return console.log(`computer chose ${comp}, you won. You've gained 1 point.`);
//         }
//     };
//     for (let i = 0; i < 5; ++i) {
//         playRound();
//     } if (humanScore == computerScore) {
//         return console.log(`Total score was you: ${humanScore}, us: ${computerScore}.You tied.`);
//     } else if (humanScore > computerScore) {
//         return console.log(`Total score was you: ${humanScore}, us: ${computerScore}. You won!`);
//     } else {
//         return console.log(`Total score was you: ${humanScore}, us: ${computerScore}.You lost!`);
//     }
// };

