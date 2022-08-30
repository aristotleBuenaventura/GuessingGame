var rightLetters = ["T","J","A","Y"];
var rightGuesses = ["_","_","_","_"]; 
var wrongGuesses = []; 

var score = Number(0);
var count = 0; 
var message = '';
var addScore = 0;

function guessMe(user_guess){
    for(i =0; i <= rightLetters.length; i++){
        if(rightLetters[i] == user_guess){
            if(rightGuesses.includes(user_guess) && rightGuesses[i] == user_guess){
                message = `Your guessed letter (${user_guess}) is already used`;
            } else{
                rightGuesses[i] = user_guess;
                addScore = Number(Math.ceil(Math.random()*10))
                score += addScore;
                message = `Yes!!! you found a letter!`;
                if(!rightGuesses.includes("_")){
                    message = `You won bebe girl!!!`;
                }
            }
        }
    } 
    if(!rightLetters.includes(user_guess)){
        if(wrongGuesses.includes(user_guess)){
            message = `Your guessed letter (${user_guess}) is already used `;
        } else{
            wrongGuesses.push(user_guess);
            minusScore = Number(Math.ceil(Math.random()*10));
            score -= minusScore;
            addScore = `-${minusScore}`;
            count++;
            message = "Ohhhhhh nooooo! thats not the right letter!!!"
        }
    }     
}


function display(){
    guess = document.querySelector('#letter').value;
    document.querySelector("#letter").value = '';
    
    if(!(count < rightLetters.length)){
        message = `You don't have life anymore! \nThe End and Goodbye! The`;
        document.querySelector("#message").innerHTML = message;
    } else if(!rightGuesses.includes("_")){
        message = `The End and Goodbye!`;
        document.querySelector("#message").innerHTML = message;
    } else if(guess == ''){
        message = `Please enter a letter`;
        document.querySelector("#message").innerHTML = message;
    } else {
        guessMe(guess.toUpperCase());
        document.querySelector("#correctGuess").innerHTML = rightGuesses;
        document.querySelector("#wrongGuess").innerHTML = wrongGuesses;
        document.querySelector("#message").innerHTML = message;
        document.querySelector("#addScore").innerHTML = `${addScore} points`;
        document.querySelector("#score").innerHTML = `${score} points`;
        document.querySelector("#life").innerHTML = rightLetters.length-count; 
    }
}


window.addEventListener('load', () => {
    document.querySelector("#correctGuess").innerHTML = rightGuesses;
    document.querySelector("#wrongGuess").innerHTML = wrongGuesses;
    document.querySelector("#message").innerHTML = message;
    document.querySelector("#addScore").innerHTML = addScore;
    document.querySelector("#score").innerHTML = score;
    document.querySelector("#life").innerHTML = rightLetters.length-count;
})


