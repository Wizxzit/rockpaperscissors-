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
   //let value = prompt("Enter rock, paper, or scissors:");
    return console.log(value);
}

getHumanChoice();