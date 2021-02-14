var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber1 = "images/dice" + randomNumber1 + ".png";
var randomDiceNumber2 = "images/dice" + randomNumber2 + ".png";

function randomNumberDice1() {
  var diceSelector = document.querySelector("#dice1").setAttribute("src", randomDiceNumber1);
  diceSelector;
}
;
function randomNumberDice2() {
  var diceSelector = document.querySelector("#dice2").setAttribute("src", randomDiceNumber2);
  diceSelector;
}

function changeHeader() {
  var selectH1 = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    selectH1.innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    selectH1.innerHTML = "Player 2 Wins!";
  } else {
    selectH1.innerHTML = "Draw!";
  }
}

randomNumberDice1();
randomNumberDice2();
changeHeader();