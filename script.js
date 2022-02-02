var ActivePlayer;
var playerOne = true;
var playerOneScore = 0;
var playerTwo = false;
var playerTwoScore = 0;

//get the game board
var gameBoardSquareNodeList = document.querySelectorAll(".game-board-square");

//get the score boards
var playerOneScoreBoard = document.querySelector(".player-one-score");
var playerTwoScoreBoard = document.querySelector(".player-two-score");

//background
var background;
var backgroundRetro;

//theme
var gameTheme;
var themeClass;

// marker options
var circleTextMarker = "o";
var crossTextMarker = "x";
var circleImgMarker = `<span class="icon circle-icon"></span>`;
var crossImgMarker = `<span class="icon cross-icon"></span>`;

var playerOneToken;
var playerTwoToken;

//get doms classes
var bodyEl = document.querySelector("body");
var gameBoardEl = document.querySelector(".game-board");
var playerOneScoreBoardEl = document.querySelector(".player-one");
var playerTwoScoreBoardEl = document.querySelector(".player-two");
var playerOneScoreEl = document.querySelector(".player-one-score");
var playerTwoScoreEl = document.querySelector(".player-two-score");

var defaultThemeClass = function () {
  bodyEl.classList.remove("retro");
  gameBoardEl.classList.remove("retro");
  bodyEl.classList.add("default");
  gameBoardEl.classList.add("default");
  playerOneScoreBoardEl.classList.add("default");
  playerTwoScoreBoardEl.classList.add("default");
  playerOneScoreEl.classList.add("default");
  playerTwoScoreEl.classList.add("default");
};

// theme Class functions
var retroThemeClass = function () {
  bodyEl.classList.add("retro");
  gameBoardEl.classList.add("retro");
};
//Themes settings
var defaultTheme = function () {
  playerOneToken = circleImgMarker;
  playerTwoToken = crossImgMarker;
  defaultThemeClass();
};

var retroTheme = function () {
  playerOneToken = "o";
  playerTwoToken = "x";
  retroThemeClass();
};

gameTheme = defaultTheme();

//initial settings
var init = function () {
  for (var i = 0; i < gameBoardSquareNodeList.length; i++) {
    gameBoardSquareNodeList[i].innerHTML = "";
  }
  ActivePlayer = playerOne;
};

init();

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
  //player 1 wins

  if (
    (s1.innerHTML === playerOneToken &&
      s2.innerHTML === playerOneToken &&
      s3.innerHTML === playerOneToken) ||
    (s4.innerHTML === playerOneToken &&
      s5.innerHTML === playerOneToken &&
      s6.innerHTML === playerOneToken) ||
    (s7.innerHTML === playerOneToken &&
      s8.innerHTML === playerOneToken &&
      s9.innerHTML === playerOneToken) ||
    (s1.innerHTML === playerOneToken &&
      s4.innerHTML === playerOneToken &&
      s7.innerHTML === playerOneToken) ||
    (s2.innerHTML === playerOneToken &&
      s5.innerHTML === playerOneToken &&
      s8.innerHTML === playerOneToken) ||
    (s3.innerHTML === playerOneToken &&
      s6.innerHTML === playerOneToken &&
      s9.innerHTML === playerOneToken) ||
    (s1.innerHTML === playerOneToken &&
      s5.innerHTML === playerOneToken &&
      s9.innerHTML === playerOneToken) ||
    (s3.innerHTML === playerOneToken &&
      s5.innerHTML === playerOneToken &&
      s7.innerHTML === playerOneToken)
  ) {
    console.log(`winner player one`);
    playerOneScore = playerOneScore + 1;
    playerOneScoreBoard.innerText = playerOneScore;
    init();

    //player 2 wins
  } else if (
    (s1.innerHTML === playerTwoToken &&
      s2.innerHTML === playerTwoToken &&
      s3.innerHTML === playerTwoToken) ||
    (s4.innerHTML === playerTwoToken &&
      s5.innerHTML === playerTwoToken &&
      s6.innerHTML === playerTwoToken) ||
    (s7.innerHTML === playerTwoToken &&
      s8.innerHTML === playerTwoToken &&
      s9.innerHTML === playerTwoToken) ||
    (s1.innerHTML === playerTwoToken &&
      s4.innerHTML === playerTwoToken &&
      s7.innerHTML === playerTwoToken) ||
    (s2.innerHTML === playerTwoToken &&
      s5.innerHTML === playerTwoToken &&
      s8.innerHTML === playerTwoToken) ||
    (s3.innerHTML === playerTwoToken &&
      s6.innerHTML === playerTwoToken &&
      s9.innerHTML === playerTwoToken) ||
    (s1.innerHTML === playerTwoToken &&
      s5.innerHTML === playerTwoToken &&
      s9.innerHTML === playerTwoToken) ||
    (s3.innerHTML === playerTwoToken &&
      s5.innerHTML === playerTwoToken &&
      s7.innerHTML === playerTwoToken)
  ) {
    console.log(`winner player two`);
    playerTwoScore = playerTwoScore + 1;
    playerTwoScoreBoard.innerText = playerTwoScore;
    init();
  } else if (
    //its a draw/tie
    (s1.innerHTML === playerOneToken || s1.innerHTML === playerTwoToken) &&
    (s2.innerHTML === playerOneToken || s2.innerHTML === playerTwoToken) &&
    (s3.innerHTML === playerOneToken || s3.innerHTML === playerTwoToken) &&
    (s4.innerHTML === playerOneToken || s4.innerHTML === playerTwoToken) &&
    (s5.innerHTML === playerOneToken || s5.innerHTML === playerTwoToken) &&
    (s6.innerHTML === playerOneToken || s6.innerHTML === playerTwoToken) &&
    (s7.innerHTML === playerOneToken || s7.innerHTML === playerTwoToken) &&
    (s8.innerHTML === playerOneToken || s8.innerHTML === playerTwoToken) &&
    (s9.innerHTML === playerOneToken || s9.innerHTML === playerTwoToken)
  ) {
    console.log(`it's a tie`);
    init();
  }
}

function placeMarker(event) {
  var boxClicked = event.target;
  if (ActivePlayer === playerOne) {
    console.log(`player 1 placed marker`);
    if (boxClicked.tagName.toLowerCase() === "div") {
      if (boxClicked.innerHTML === "") {
        boxClicked.innerHTML = playerOneToken;
        ActivePlayer = playerTwo;
      }
    }
    winner();
  } else if (ActivePlayer === playerTwo) {
    console.log(`player 2 placed marker`);
    if (boxClicked.tagName.toLowerCase() === "div") {
      if (boxClicked.innerHTML === "") {
        boxClicked.innerHTML = playerTwoToken;
        ActivePlayer = playerOne;
      }
    }
    winner();
  }
}

var gameBoardEl = document.querySelector(".game-board");
gameBoardEl.addEventListener("click", placeMarker);
