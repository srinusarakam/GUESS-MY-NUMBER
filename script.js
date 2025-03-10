const container=document.querySelector("#container");
const again=document.querySelector("#buttonone");
const check=document.querySelector("#check");
const hideNum=document.querySelector("#question");
const outputMessage=document.querySelector("#start");
const inputNum=document.querySelector("#enter");
const scoreEl=document.querySelector("#score");
const highScoreEl=document.querySelector("#highscore");

//generate random number
let secretNum= Math.trunc(Math.random()*20)+1;
console.log(secretNum)

let score= 20;
let highscore= 0;

//event to check the hide number
check.addEventListener('click',()=>{
    const guessNum= Number(inputNum.value);

    if(guessNum){

        //not match with hide Number
        if(guessNum!= secretNum){
            if(score > 1){

                score--;
                scoreEl.textContent= score;
                outputMessage.textContent= guessNum > secretNum ? "Too High" : "Too Low";


            }
            else{
                outputMessage.textContent = "You Lost the Game";
                document.getElementById("container1").style.backgroundColor="red";
                document.getElementById("container3").style.backgroundColor="red";
                scoreEl.textContent= 0;
                hideNum.textContent= secretNum;

            }

        }
        else{
            hideNum.textContent= secretNum;
            document.getElementById("container1").style.backgroundColor="green";
            document.getElementById("container3").style.backgroundColor="green";
            outputMessage.innerHTML="Congratulations...:) <br><br> you won the Game"
            document.getElementById("enter").style.backgroundColor="green";
            inputNum.disabled=true;
            check.disabled=true
            if(score>highscore){
                    highscore=score;
                    highScoreEl.textContent=highscore
            }
        }
        
    }
    else{
        outputMessage.textContent="please enter the Number.."
    }
});

    buttonone.addEventListener('click',()=>{
    score= 20;
    secretNum= Math.floor(Math.random()*20)+1;
    scoreEl.textContent= score;
    inputNum.value= "";
    document.getElementById("container1").style.backgroundColor="black";
    document.getElementById("container3").style.backgroundColor="black";
    outputMessage.textContent="Start Guessing...";
    document.getElementById("enter").style.backgroundColor="black";
    hideNum.textContent="?";
    inputNum.disabled=false;
    check.disabled=false
})

