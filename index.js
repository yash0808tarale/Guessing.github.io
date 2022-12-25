let computerGuess;
let userGuess=[];
let userGuessUpdate=document.getElementById("textOutput");
let userNumberUpdate=document.getElementById("inputBox");


const init=()=>{
    computerGuess =Math.floor(Math.random()*100) ;
    document.getElementById("newGameButton").style.display='none';
    document.getElementById("gameArea").style.display='none';
};

const startGame=()=>{
    document.getElementById("welcomeScreen").style.display="none";
    document.getElementById("gameArea").style.display='block';
}

const startNewGame=()=>{
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled",true);
}

const newGameBegin=()=>{
    window.location.reload();
}

const compareGuess=()=>{
    const userNumber=Number(document.getElementById("inputBox").value);
    userGuess=[...userGuess,userNumber];
    document.getElementById("guesses").innerHTML=userGuess;

   if(userGuess.length<maxGuess){ 
    if(userNumber>computerGuess){
        userGuessUpdate.innerHTML="Your Guess is high";
        userNumberUpdate.value="";
    }
    else if(userNumber<computerGuess){
        userGuessUpdate.innerHTML="Your Guess is low";
        userNumberUpdate.value="";
    }
    else{
        userGuessUpdate.innerHTML="It is the Correct Number";
        userNumberUpdate.value="";
        startNewGame();
    }}
    else{
        if(userNumber>computerGuess){
            userGuessUpdate.innerHTML=`You Loose ! The correct Number was ${computerGuess}`;
            userNumberUpdate.value="";
            startNewGame();
        }
        else if(userNumber<computerGuess){
            userGuessUpdate.innerHTML=`You Loose ! The correct Number was ${computerGuess}`;
            userNumberUpdate.value="";
            startNewGame();
        }
        else{
            userGuessUpdate.innerHTML="It is the Correct Number";
            userNumberUpdate.value="";
            startNewGame();
        }
    }
    document.getElementById("attempts").innerHTML=userGuess.length;
};

const easyMode=()=>{
    maxGuess=10;
    startGame();
}
const hardMode=()=>{
    maxGuess=5;
    startGame();
}


