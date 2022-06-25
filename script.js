
let scorePlayer = 0;
let scoreComputer = 0;

function FadeIn(obj) {
    console.log(obj);
    let divObj = obj.textContent.split("");
    obj.textContent = "";
    let timer = 0;
    divObj.forEach((letter) => {
        
            let spanner = document.createElement('span');
            spanner.textContent = letter;
            spanner.classList.add("waiting");
            obj.appendChild(spanner);
        
    })

    let spanners = document.querySelectorAll("span");

    spanners.forEach((spanner) => {
        setTimeout(() => {
            spanner.classList.remove("waiting");
            spanner.classList.add("go-in");
        console.log(obj.textContent);
        }, timer);
        timer += 100;
    }
    )
}

function Capitalizer(word){
    return word.charAt(0).toUpperCase() + word.slice(1,word.length).toLowerCase();
}

function ComputerChoice(){
    let rand_num = Math.floor(Math.random()*3+1);
    let choice = "";
    if (rand_num === 1) {
        choice = "rock";
    }
    else if (rand_num == 2){
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;
}

function PlayRound(playerInput, computerInput = ComputerChoice()){
    
    if (playerInput === computerInput) {
        console.log(`Tie!`);
    }
    else if ((playerInput == "rock" && computerInput == "paper") || (playerInput == "paper" && computerInput == "scissors") || (playerInput == "scissors" && computerInput == "rock")){
        console.log(`You lose! ${Capitalizer(computerInput)} beats ${Capitalizer(playerInput)}.`);
        scoreComputer++;
    }
    else {
        console.log(`You win! ${Capitalizer(playerInput)} beats ${Capitalizer(computerInput)}.`);
        scorePlayer++;
    }
}

function check_input(playerChoice){
    if (typeof(playerChoice) != "string") {
        return false;
    }
    if (playerChoice != "scissors" && playerChoice != "rock" && playerChoice != "paper"){
        return false;
    }

    return true;
}

FadeIn(document.querySelector(".opener_h"));

/*
console.log("bruh");

for (i = 0; i<5; i++){
    let playerChoice = prompt("Choose your symbol.").toLowerCase();

    while (!check_input(playerChoice)) {
        console.log("Invalid input.");
        playerChoice = prompt("Choose your symbol.").toLowerCase();
    }

    PlayRound(playerChoice);
}

if (scoreComputer > scorePlayer) {
    console.log("You lost.");
}
else if (scoreComputer == scorePlayer) {
    console.log("You tied.");
}
else {
    console.log("You won!");
}*/