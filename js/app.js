let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const rndIdx = Math.floor(Math.random() * 3);
    return options [rndIdx];
};

const drawgame = () =>{
    // console.log("Game Was Darw");
    msg.innerText = "Game Was Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("Congratulation, You Win");
        msg.innerText = `Congratulation You Win your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You losse");
        msg.innerText = `You Losse ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    // console.log("User Choice", userChoice);
    const CompChoice = genCompChoice();
    // console.log("Computer Choice", CompChoice);
    if(userChoice === CompChoice){
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = CompChoice === "paper" ? false :true;
        }else if (userChoice === "paper"){
           userWin =  CompChoice === "scissors" ? false : true;
        }else{
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
};

choices.forEach((choice) =>{
    // console.log("choice");
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    });
});
