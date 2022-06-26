
let scorePlayer = 0;
let scoreComputer = 0;
let choices = document.querySelectorAll(".choice");
let play_view = document.querySelector(".play_view");
let ender = document.querySelector(".ending");
let r_but = document.querySelector(".retry");
let comment = document.querySelector(".comment");
let end_t = document.querySelector(".end-text");



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
            /*spanner.addEventListener('animationend', (e) => {spanner.classList.remove("go-in")});
            */
        }, timer);
        timer += 100;
    }
    )
}

function Capitalizer(word){
    return word.charAt(0).toUpperCase() + word.slice(1,word.length).toLowerCase();
}

function restart() {
    choices.forEach((choser) => {
        choser.removeEventListener('click', ecl);
         
    });
        play_view.classList.remove('go-in2');
        play_view.classList.add('go-out');
        play_view.addEventListener('animationend', () => {
            play_view.setAttribute('id','hide');
            ender.setAttribute('id', '');
            ender.classList.add('go-in2');
        r_but.addEventListener('click', () => {
            scoreComputer = 0;
            scorePlayer = 0;
            document.querySelector(".computer .points").textContent = scoreComputer;
            document.querySelector(".player .points").textContent = scorePlayer;
            removeEventListener('click', r_but);
            play_view.setAttribute('id', '');
            ender.classList.remove('go-in2');
            play_view.classList.remove('go-out');
            comment.textContent = "-";
            begin();
        }, {once:true})

    }, {once: true})
}


function ending()
{
    if (scoreComputer === 5 || scorePlayer == 5) {
        if (scoreComputer == 5) {end_t.textContent = "You lose..."}
        else {end_t.textContent = "You win!"}
        return true;
    }
    return false;
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
    console.log(playerInput);

    if (playerInput === computerInput) {
        comment.textContent = "Tie!";
    }
    else if ((playerInput == "rock" && computerInput == "paper") || (playerInput == "paper" && computerInput == "scissors") || (playerInput == "scissors" && computerInput == "rock")){
        comment.textContent = `You lose! ${Capitalizer(computerInput)} beats ${playerInput}.`;
        scoreComputer++;
        document.querySelector(".computer .points").textContent = scoreComputer;
    }
    else {
        comment.textContent = `You win! ${Capitalizer(playerInput)} beats ${computerInput}.`;
        scorePlayer++;
        document.querySelector(".player .points").textContent = scorePlayer;
    }

    if (ending()) {restart()};
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

function ecl(e) {
    chosen = e.target;
    
        PlayRound(chosen.alt.toLowerCase());
       
}


function begin(){
    play_view.classList.add("go-in2");
    play_view.setAttribute('id', '');
    

    function on_click() {

                choices.forEach((chosen) =>{
            chosen.addEventListener('click', ecl);
        })
    }

    /*play_view.addEventListener('animationend', on_click, {once: true})*/
    on_click();
}

FadeIn(document.querySelector(".opener_h"));

setTimeout(() => {
    let p_but = document.querySelector(".play");
    if (!p_but.classList.contains("go-out")) {
        p_but.classList.add("go-in");
        p_but.classList.remove("waiting");
    }
    /*p_but.addEventListener('animationend', (e) => {p_but.remove("go-in"), document.querySelector(".play").removeEventListener('animationend')});
*/
},2500);

let play_b = document.querySelector(".play");
let head_i = document.querySelector(".opener_h");

play_b.addEventListener('click', (e) => {
    let ins = document.querySelectorAll(".go-in");
    ins.forEach((obj) => {obj.classList.remove("go-in"), console.log("removed")});
    play_b.classList.add("go-out");
    head_i.classList.add("go-out");
    play_b.classList.remove("go-in");
    play_b.addEventListener('animationend', (e) =>
     {head_i.setAttribute('id','hide');("hide"),
     play_b.setAttribute('id','hide');("hide"), 
    begin()}, {once: true});
    
}, {once: true});

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