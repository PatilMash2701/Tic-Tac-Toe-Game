let userScore=0;
let compScore=0;
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");
let compch=document.querySelector("#compch");

const choices=document.querySelectorAll(".sym");
//no here we select all div of class sym undustood

const genComChoice= () => {
    const options=["rock","paper","scissors"];
    // Math.random() gives any number between the 0 and 1
    // so to convert it into the 0 to 3 multiply it with 3
    //rock, paper, scissors
    //to remove decimal we use Math.floor(Math.random()*3)..
    //math.floor()converts the decimal number into the int 
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];


}   
const drawGame = () => {
   msg.innerText="Game is Draw";
   msg.style.backgroundColor="gray";
};


const playGame = (userChoice) => {
   // console.log("user choice = ",userChoice);
    //generate computer choice(function gerneration called moduler form of coding)
    const compChoice=genComChoice();
   // console.log("computer choice = ",compChoice);
    compch.innerText=`computer choice :${compChoice}`;
    
    if (userChoice == compChoice){
       drawGame();
    }else{
        if(userChoice==="rock" && compChoice==="scissors"){
            userScore++;
            msg.innerText="You Win!";
            msg.style.backgroundColor="green";
         }else if(userChoice==="rock" && compChoice==="paper"){
            compScore++;
            msg.innerText="You lost";
            msg.style.backgroundColor="red";
        }else if(userChoice==="paper" && compChoice==="rock"){
            userScore++;
            msg.innerText="You Win!";
            msg.style.backgroundColor="green";
        }else if(userChoice==="paper" && compChoice==="scissors"){
            compScore++;
            msg.innerText="You lost";
            msg.style.backgroundColor="red";
        }else if(userChoice==="scissors" && compChoice==="paper"){
            userScore++;
            msg.innerText="You Win!";
            msg.style.backgroundColor="green";
        }else{
            compScore++;
            msg.innerText="You lost";
            msg.style.backgroundColor="red";
        }
        user.innerText=userScore;
        comp.innerText=compScore;
    }


   
};
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    });
});
