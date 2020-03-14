var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z"];
var guessesRemaining = 9;
var wins = 0;
var losses = 0;
var guessedLetters = [""];
var guesses = document.getElementById("guesses");
var guessed = document.getElementById("guessed");
var computersLetter = "";


guesses.innerHTML += guessesRemaining;
guessed.innerHTML += guessedLetters;
randLetter();
randLetter();
randLetter();
randLetter();
randLetter();


for (let i = 0; i > guessesRemaining; i++) {
    ;
    
}

//reset game
if (guessesRemaining <= 0) {
    guessesRemaining = 9;
    randLetter;
    guessedLetters = [];
}



















//random letter function

function randLetter( ) {

  
    var letter = letters[Math.floor(Math.random()*letters.length)];
    
    console.log(letter);
    console.log(letters);
    
    
    }
    