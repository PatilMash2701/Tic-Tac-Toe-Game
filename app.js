let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let mdraw=document.querySelector(".draw");
let turnO=true;//playerX,playerO;
let m=1;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        if(turnO){
            box.innerText="X";
            turnO=false; 
        }else{
            box.innerText="O"
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
       
    });
});
const resetGame=() => {
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide");
}
const enableBoxes=() => {
     for(let box of boxes ){
        box.disabled=false; 
        box.innerText="";
     }
}
const disableBoxes= () => {
   for(let box of boxes){
      box.disabled=true;
   }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner = () => {
    for(patterns of winPatterns){
        let pos1Val=boxes[patterns[0]].innerText;
        let pos2Val=boxes[patterns[1]].innerText;
        let pos3Val=boxes[patterns[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!="" ){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
                disableBoxes();
            }
        }
    }

}
const checkdisable=()=>{
    for(let box of boxes){
        if(box.disabled==false){
            m=0;
        }
        if(m==1){
         mdraw.classList.remove("hode");
        }
    }
    m=1;
}
newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
