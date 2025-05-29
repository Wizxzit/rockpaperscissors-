// DOM elements
const activeText = document.createElement("div");
const container = document.getElementById("container");

container.append(activeText);
activeText.style.marginTop = "1rem";
activeText.style.color = "white";

// buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");


// rock button
rockButton.addEventListener('mouseover', function() {
    rockButton.style.color = "blue";
    activeText.textContent = "You're picking rock";
});

rockButton.addEventListener('mouseout', function() {
    rockButton.style.color = "black";
    activeText.textContent = "";
});

// paper button
paperButton.addEventListener('mouseover', function() {
    paperButton.style.color = "blue";
    activeText.textContent = "You're picking paper";
});

paperButton.addEventListener('mouseout', function() {
    paperButton.style.color = "black";
    activeText.textContent = "";
});

// scissors button
scissorsButton.addEventListener('mouseover', function() {
    scissorsButton.style.color = "blue";
    activeText.textContent = "You're picking scissors";
});

scissorsButton.addEventListener('mouseout', function() {
    scissorsButton.style.color = "black";
    activeText.textContent = "";
});



rockButton.addEventListener('click', (onClick) => playRound(getComputerChoice(), "rock"));
paperButton.addEventListener('click', (onClick) => playRound(getComputerChoice(), "paper"));
scissorsButton.addEventListener('click', (onClick) => playRound(getComputerChoice(), "scissors"));

// page functions
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


function playRound(comp, human) {
    human = getHumanChoice();
    comp = getComputerChoice();
    if (human === comp) {
        return console.log(`computer chose ${comp}, you tied`);
    } else if ((human == "scissors" && comp == "rock") || (human == "rock" && comp == "paper") || (human == "paper" && comp == "scissors")) {
        ++computerScore;
        return console.log(`computer chose ${comp}, you lost. Computer gained 1 point.`);
    } else {
        ++humanScore;
        return console.log(`computer chose ${comp}, you won. You've gained 1 point.`);
    }
};



