
function ComputerChoice(){
    let rand_num = Math.floor(Math.random()*3+1);
    let choice = "";
    if (rand_num === 1) {
        choice = "Rock";
    }
    else if (rand_num == 2){
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }

    return choice
}