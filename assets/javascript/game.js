var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let wins = 0;
let losses = 0;
let guesses = 10;
let guessesLeft = 10;
let guessedLetters = [];
let letterToGuess = false;

//computer guess
let computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

//10 guesses
//guesses = guesses || 10
function updateGuessesLeft() {
  document.querySelector("#guessesLeft").innerHTML =
    "Guesses Left: " + guessesLeft;
}

function updateLetterToGuess() {
  this.letterToGuess = this.computerChoices[
    Math.floor(Math.random() * this.computerChoices.length)
  ];
}

function updateGuessesSoFar() {
  document.querySelector("#let").innerHTML =
    "Your Guesses so far: " + guessedLetters.join(",");
}

//function called when we reset
var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

//user guess
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  var check = computerChoices.includes(userGuess);

  if (check === false) {
    alert("That was not a valid guess, try again?");
    return false;
  } else if (check === true) {
    guessesLeft--;
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0) {
      if (userGuess === letterToGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        userGuess = userGuess.toUpperCase();
        reset();
      }
    } else if (guessesLeft === 0) {
      losses++;
      document.querySelector("#losses").innerHTML = "Losses: " + losses;
      reset();
    }
    return false;
  } else {
    alert("Oops, we have an ERROR!");
  }
};
// var directionsText = document.getElementById("directions-text");
// var userChoiceText = document.getElementById("userchoice-text");
// var computerChoiceText = document.getElementById("computerchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
// var tiesText = document.getElementById("guesses-text");

// document.onkeyup = function(event) {
//   var userGuess = event.key;
//   console.log(userGuess);
//   var computerGuess =
//     computerChoices[Math.floor(Math.random() * computerChoices.length)];
//   //if and else statements for the win/losses/guesses
//   if (userGuess === computerGuess) {
//     wins++;
//   } else {
//     losses++;
//   }
//   directionsText.textContent = "";
//   userChoiceText.textContent = "You chose: " + userGuess;
//   computerChoiceText.textContent = "The computer chose: " + computerGuess;
//   winsText.textContent = "wins: " + wins;
//   lossesText.textContent = "losses: " + losses;
//   tiesText.textContent = "ties: " + ties;
// };
