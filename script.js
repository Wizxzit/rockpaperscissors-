// variables
let humanScore = 0, computerScore = 0;

// DOM elements
const activeText = document.createElement("div");
const container = document.getElementById("container");
const responseText = document.createElement("div");
const scoreText = document.createElement("div");

container.append(activeText);
activeText.style.margin = "2rem auto";
activeText.style.color = "white";

container.append(responseText);
responseText.style.color = "white";

container.append(scoreText);
scoreText.style.color = "white";
scoreText.textContent = `Current score is you: ${humanScore} vs us: ${computerScore}.`

// buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");


// rock button
rockButton.addEventListener('mouseover', function () {
    rockButton.style.color = "brown";
    activeText.textContent = "You're picking rock";
});

rockButton.addEventListener('mouseout', function () {
    rockButton.style.color = "black";
    activeText.textContent = "";
});

rockButton.addEventListener('click', function () {
    playRound(getComputerChoice(), "rock");
});

// paper button
paperButton.addEventListener('mouseover', function () {
    paperButton.style.color = "blue";
    activeText.textContent = "You're picking paper";
});

paperButton.addEventListener('mouseout', function () {
    paperButton.style.color = "black";
    activeText.textContent = "";
});

paperButton.addEventListener('click', function () {
    playRound(getComputerChoice(), "paper");
});

// scissors button
scissorsButton.addEventListener('mouseover', function () {
    scissorsButton.style.color = "red";
    activeText.textContent = "You're picking scissors";
});

scissorsButton.addEventListener('mouseout', function () {
    scissorsButton.style.color = "black";
    activeText.textContent = "";
});

scissorsButton.addEventListener('click', function () {
    playRound(getComputerChoice(), "scissors");
});

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
    if (human === comp) {
        responseText.textContent = `We chose ${comp}, We tied.`;
        scoreText.textContent = `Current score is you: ${humanScore} vs us: ${computerScore}.`;
        return console.log(`We chose ${comp}, We tied.`);
    } else if ((human == "scissors" && comp == "rock") || (human == "rock" && comp == "paper") || (human == "paper" && comp == "scissors")) {
        computerScore++;
        scoreText.textContent = `Current score is you: ${humanScore} vs us: ${computerScore}.`;
        responseText.textContent = `We chose ${comp}, you lost. We gained 1 point.`;
        return console.log(`We chose ${comp}, you lost. Computer gained 1 point.`);
    } else {
        humanScore++;
        scoreText.textContent = `Current score is you: ${humanScore} vs us: ${computerScore}.`;
        responseText.textContent = `We chose ${comp}, you won. You've gained 1 point.`;
        return console.log(`We chose ${comp}, you won. You've gained 1 point.`);
    }
};



