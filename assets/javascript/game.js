const word = [
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

let randNum = Math.floor(Math.random() * word.length);
let choosenWord = word[randNum];
let underScore = [];
console.log(choosenWord);
let genreateUnderScore = function() {
  for (let i = 0; i < choosenWord.length; i++) {
    underScore.push("_");
  }
  return underScore;
};

console.log(genreateUnderScore());
document.addEventListener("keypress", function(event) {
  let keyword = String.fromCharCode(event.keycode);
  console.log(keyword);
});

/* <script>
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

      var guessesleft = 10;
      var guessedletters = [
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
      var wins = 0;
      var losses = 0;

      var directionsText = document.getElementById("directions-text");
      var userChoiceText = document.getElementById("userchoice-text");
      var computerChoiceText = document.getElementById("computerchoice-text");
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById("losses-text");
      var tiesText = document.getElementById("guesses-text");

      document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
        var computerGuess =
          computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //if and else statements for the win/losses/guesses
        if (userGuess === computerGuess) {
          wins++;
        } else {
          losses++;
        }
        directionsText.textContent = "";
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
      };
    </script> */
