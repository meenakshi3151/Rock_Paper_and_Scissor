const choices=["Rock", "Paper", "Scissor"];
let userscore_span=document.getElementById("gamep");
let computerscore_span=document.getElementById("gamec");
let result=document.querySelector(".text");
let userscore=0;
let computerscore=0;
let userchoice=" ";
let computerchoice=" ";
main();
function main(){
    const rock_div=document.getElementById("btn1");
    const paper_div=document.getElementById("btn2");
    const scissor_div=document.getElementById("btn3");
    rock_div.addEventListener("click",()=>game
    ("Rock"))
    paper_div.addEventListener("click",()=>game
    ("Paper"))
    //addeventlistener is a browser function
    scissor_div.addEventListener("click",()=>game
    ("Scissor"))
}
// random is a function and math is a function
function game(userchoice)
{
    
    const randomindex=Math.floor(Math.random()*choices.length);
    
computerchoice=choices[randomindex];

switch(userchoice + computerchoice){
    
    case "RockScissor":
    case "PaperRock":
  case "ScissorPaper":
               win(userchoice,computerchoice)
break;
    case "RockPaper":
        case "ScissorPaper":
            case "PaperScissor":
              
                lose(userchoice,computerchoice)
                break;

                case "RockRock":
                    case "ScissorScissor":
                        case "PaperPaper":
                          draw(userchoice,computerchoice)
                           break;

}
}
function win(userchoice,computerchoice){
    console.log("gi")
userscore++;
userscore_span.innerHTML=userscore;
result.innerHTML= "You Won!";

}
function lose(userchoice,computerchoice){
    console.log("gi")
computerscore++;
computerscore_span.innerHTML=computerscore;
result.innerHTML="You lose!";
}
function draw(userchoice,computerchoice){
    console.log("gi")
result.innerHTML=`Its a draw`;
}
