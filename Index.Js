let randomNumber=(parseInt((Math.random()*100+1)));

const submit=document.querySelector("#subt")
const userinput=document.querySelector("#guessField")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const loOrhi=document.querySelector(".lowOrHi")
const startOver=document.querySelector(".resultParas")

const p=document.createElement("p")

let prevGuess=[]
let numGuesses=0

let playGame=true;

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Enter a Valid Number");
    }
    else if(guess<1){
        alert("Enter a Greater Number");
    }
    else if(guess>100){
        alert("Enter a Smaller Number");
    }
    else{
        prevGuess.push(guess)
        if(numGuesses===10){
            displayGuess(guess)
            displayMessage(`Game Over . Random Number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
if(guess===randomNumber){
    displayMessage(`Yooho You Guesses It Right`)
    endGame()
    }
else if(guess<randomNumber){
    displayMessage("Number is too Low");
    }
else if(guess>randomNumber){
    displayMessage("Number is too High");
    }

}

function displayGuess(guess){
    userinput.value=""
    guessSlot.innerHTML+=` ${guess} `
    numGuesses++;
    remaining.innerHTML=`${10-numGuesses}`;
}

function displayMessage(message){
    loOrhi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userinput.value=""
    userinput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame"> Start New Game </h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
const newGameButton=document.querySelector("#newGame")
newGameButton.addEventListener("click",function(e){
    randomNumber=(parseInt((Math.random()*100+1)));
    prevGuess=[]
    numGuesses = 0;
    guessSlot.innerHTML=""
    remaining.innerHTML=`${10-numGuesses}`;
    userinput.removeAttribute("disabled")
    startOver.removeChild(p)
    playGame=true;
})
}


