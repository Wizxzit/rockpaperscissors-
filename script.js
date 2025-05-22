let humanScore = 0, computerScore = 0;

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
}

function playRound(comp human) {
    human = getHumanChoice();
    comp = getComputerChoice();
    if (human === comp) {
        return console.log(`computer chose ${comp}, you tied`);
    } else if ((human == "scissors" && comp == "rock") || (human == "rock" && comp == "paper") || (human == "paper" && comp == "scissors")) {
        ++computerScore;
        return console.log(`computer chose ${comp}, you lost. Computer gained 1 point.`)
    } else {
        ++humanScore;
        return console.log(`computer chose ${comp}, you won. You've gained 1 point.`)
    }
};