var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guesses = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
function newGame(){
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guesses = [];
    guessesLeft = 10;
}



document.onkeyup = function (event) {

    var userGuess = event.key;

    if (userGuess !== computerGuess) {
        guessesLeft--;
        guesses.push(userGuess);
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
        document.getElementById("guesses").innerHTML = "Your guesses: " + guesses;
    } ;
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 10;
        guesses = [];
        newGame();
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("guesses-left").innerHTML = "Guesses left: " + guessesLeft;
        document.getElementById("guesses").innerHTML = "Your guesses: " + guesses;
    };

    if (guessesLeft === 0) {

        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        guesses = [];
        guessesLeft = 10;
        newGame();

    };

}



















