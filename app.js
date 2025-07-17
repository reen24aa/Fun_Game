let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorepa=document.querySelector("#user-score");
const compScorepa=document.querySelector("#comp-score");
const genCompChoice = ()=>{
    let options=["rock", "paper" , "scissor"];
    let ind=Math.floor(Math.random()*3);
    return options[ind];

}
const drawGame=()=>{
    console.log("Draw");
    msg.innerText="Draw! Play Again!";
    msg.style.backgroundColor="blue";
}

const showWinner =(userWin, userChoice, compChoice)=>{
    if(userWin==true){
        userScore++;
        userScorepa.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepa.innerText=compScore;
        
        msg.innerText=`you lose! ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame =(userChoice) =>{
    console.log("user choice =", userChoice);
    //generate computer choice;
    const compChoice=genCompChoice();
    console.log("Comp choice=", compChoice);

    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="scissor"?false:true;
        }
        else {
            userWin=compChoice=="rock"?false: true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
}
choices.forEach( (choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });


});
