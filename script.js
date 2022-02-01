var ActivePlayer;
var playerOne = true;
var playerOneScore = 0;
var playerTwo = false;
var playerTwoScore = 0;
var circleMarker = "o";
var crossMarker = "x";

//scoreBoards
var playerOneScoreBoard = document.querySelector(".player-one-score");
var playerTwoScoreBoard = document.querySelector(".player-two-score");

var gameBoardSquareNodeList = document.querySelectorAll(".game-board-square");

//getting the doms of the all game sqaures
var s1 = gameBoardSquareNodeList[0];
var s2 = gameBoardSquareNodeList[1];
var s4 = gameBoardSquareNodeList[3];
var s5 = gameBoardSquareNodeList[4];
var s6 = gameBoardSquareNodeList[5];
var s3 = gameBoardSquareNodeList[2];
var s7 = gameBoardSquareNodeList[6];
var s8 = gameBoardSquareNodeList[7];
var s9 = gameBoardSquareNodeList[8];

//winner combo table
function winner() {
  if (
    //its a draw/tie
    (s1.innerText === "o" || s1.innerText === "x") &&
    (s2.innerText === "o" || s2.innerText === "x") &&
    (s3.innerText === "o" || s3.innerText === "x") &&
    (s4.innerText === "o" || s4.innerText === "x") &&
    (s5.innerText === "o" || s5.innerText === "x") &&
    (s6.innerText === "o" || s6.innerText === "x") &&
    (s7.innerText === "o" || s7.innerText === "x") &&
    (s8.innerText === "o" || s8.innerText === "x") &&
    (s9.innerText === "o" || s9.innerText === "x")
  ) {
    console.log(`it's a tie`);
    init();

    //player 1 wins
  } else if (
    (s1.innerText === "o" && s2.innerText === "o" && s3.innerText === "o") ||
    (s4.innerText === "o" && s5.innerText === "o" && s6.innerText === "o") ||
    (s7.innerText === "o" && s8.innerText === "o" && s9.innerText === "o") ||
    (s1.innerText === "o" && s4.innerText === "o" && s7.innerText === "o") ||
    (s2.innerText === "o" && s5.innerText === "o" && s8.innerText === "o") ||
    (s3.innerText === "o" && s6.innerText === "o" && s9.innerText === "o") ||
    (s1.innerText === "o" && s5.innerText === "o" && s9.innerText === "o") ||
    (s3.innerText === "o" && s5.innerText === "o" && s7.innerText === "o")
  ) {
    console.log(`winner player one`);
    playerOneScore = playerOneScore + 1;
    playerOneScoreBoard.innerText = playerOneScore;
    init();

    //player 2 wins
  } else if (
    (s1.innerText === "x" && s2.innerText === "x" && s3.innerText === "x") ||
    (s4.innerText === "x" && s5.innerText === "x" && s6.innerText === "x") ||
    (s7.innerText === "x" && s8.innerText === "x" && s9.innerText === "x") ||
    (s1.innerText === "x" && s4.innerText === "x" && s7.innerText === "x") ||
    (s2.innerText === "x" && s5.innerText === "x" && s8.innerText === "x") ||
    (s3.innerText === "x" && s6.innerText === "x" && s9.innerText === "x") ||
    (s1.innerText === "x" && s5.innerText === "x" && s9.innerText === "x") ||
    (s3.innerText === "x" && s5.innerText === "x" && s7.innerText === "x")
  ) {
    console.log(`winner player two`);
    playerTwoScore = playerTwoScore + 1;
    playerTwoScoreBoard.innerText = playerTwoScore;
    init();
  }
}

//initial settings
var init = function () {
  for (var i = 0; i < gameBoardSquareNodeList.length; i++) {
    gameBoardSquareNodeList[i].innerText = "";
  }
  ActivePlayer = playerOne;
};

init();

function placeMarker(event) {
  var boxClicked = event.target;
  if (ActivePlayer === playerOne) {
    console.log(`playyer 1`);
    if (boxClicked.tagName.toLowerCase() === "div") {
      if (boxClicked.innerText === "o" || boxClicked.innerText === "x") {
        console.log(`error`);
      } else if (boxClicked.innerText === "") {
        boxClicked.innerText = circleMarker;
      }
    }

    winner();
    ActivePlayer = playerTwo;
  } else if (ActivePlayer === playerTwo) {
    console.log(`playyer 2`);
    if (boxClicked.tagName.toLowerCase() === "div") {
      if (boxClicked.innerText === "o" || boxClicked.innerText === "x") {
        console.log(`error`);
      } else if (boxClicked.innerText === "") {
        boxClicked.innerText = crossMarker;
      }
    }
    winner();
    ActivePlayer = playerOne;
  }
}

var gameBoardEl = document.querySelector(".game-container");
gameBoardEl.addEventListener("click", placeMarker);
