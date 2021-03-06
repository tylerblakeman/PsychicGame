//defining variables used throughout game

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];
var letter;

//gameplay variables
var guessesRemaining = 9;
var wins = 0;
var losses = 0;
var guessedLetters = [];

//html element variables
var guesses = document.getElementById("guesses");
var guessed = document.getElementById("guessed");
var winning = document.getElementById("wins");
var losing = document.getElementById("losses");


//reset game
function resetGame() {
    guessesRemaining = 9;
    guessedLetters = [];
    randLetter();
    guessed.innerHTML = guessedLetters;
    guesses.innerHTML = guessesRemaining;
}


//writing initial html with default game values
guessed.innerHTML += guessedLetters;

//selecting computer's letter
randLetter();


document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
// checking if guesses are at 0    
    if (!guessesRemaining) {
        losses++;
        losing.innerHTML = losses;
        return resetGame();
        
    }


//check if letter has been guessed yet

    if (guessedLetters.includes(userGuess)) {
        console.log("already tried that one")
    }
//registering guess and scoring

    else {
        if (letters.includes(userGuess)) {
            guessedLetters.push(userGuess);
            console.log(guessedLetters);
            guessesRemaining--;
            guesses.innerHTML = guessesRemaining;
            guessed.innerHTML = guessedLetters;

//WIN!
            if (userGuess == letter) {
                wins++;
                winning.innerHTML = wins;
                return resetGame();

            }
        }
        else {
            console.log("not a letter");
        }
    }    
}


//random letter function

function randLetter( ) {

  
    letter = letters[Math.floor(Math.random()*letters.length)];
    console.log(letter);
     
    }
    