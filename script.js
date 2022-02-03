var activePlayer;
var playerOne = true;
var playerOneScore;
var playerTwo = false;
var playerTwoScore;
var roundNumber;
var totalRounds;

//get the Dom's
var gameBoardSquareNodeList = document.querySelectorAll(".game-board-square");
var playerOneScoreBoard = document.querySelector(".player-one-score");
var playerTwoScoreBoard = document.querySelector(".player-two-score");
var bodyEl = document.querySelector("body");
var gameBoardEl = document.querySelector(".game-board");
var playerOneScoreBoardEl = document.querySelector(".player-one");
var playerTwoScoreBoardEl = document.querySelector(".player-two");
var playerOneScoreEl = document.querySelector(".player-one-score");
var playerTwoScoreEl = document.querySelector(".player-two-score");
var roundCounterNumEl = document.querySelector(".round-counter-score");
var roundCounterEl = document.querySelector(".round-counter");
var mainMenuEl = document.querySelector(".main-menu");
var bounceAnimation = document.querySelector("bounce-animation");
var spanEl = document.querySelector("span");
var countdownEl = document.querySelector(".time");

//bounce one click animation
function animationBounce() {
  gameBoardEl.classList.add("bounce-animation");
  setTimeout(function () {
    gameBoardEl.classList.remove("bounce-animation");
  }, 500);
}

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

var defaultThemeClass = function () {
  bodyEl.classList.remove("retro");
  gameBoardEl.classList.remove("retro");
  bodyEl.classList.add("default");
  gameBoardEl.classList.add("default");
  playerOneScoreBoardEl.classList.add("default");
  playerTwoScoreBoardEl.classList.add("default");
  playerOneScoreEl.classList.add("default");
  playerTwoScoreEl.classList.add("default");
  roundCounterEl.classList.add("default");
  roundCounterNumEl.classList.add("default");
  mainMenuEl.classList.add("default");
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
  playerOneScore = 0;
  playerTwoScore = 0;
  roundNumber = 1;
  totalRounds = 3;
  activePlayer = playerOne;
};

//round reset
var roundReset = function () {
  resetTimer();
  startTimer();
  roundNumber = roundNumber + 1;
  roundCounterNumEl.textContent = roundNumber;
  for (var i = 0; i < gameBoardSquareNodeList.length; i++) {
    gameBoardSquareNodeList[i].innerHTML = "";
  }
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
function playerOneWins() {
  playerOneScore = playerOneScore + 1;
  playerOneScoreBoard.textContent = playerOneScore;
  activePlayer = playerTwo;
  roundReset();
  resetTimer();
  startTimer();
  gameWinner();
}

function playerTwoWins() {
  playerTwoScore = playerTwoScore + 1;
  playerTwoScoreBoard.textContent = playerTwoScore;
  activePlayer = playerOne;
  roundReset();
  resetTimer();
  startTimer();
  gameWinner();
}

gameWinner = function () {
  if (playerOneScore === totalRounds - 1) {
    console.log(`player 1 wins 2/${totalRounds} games`);
    roundCounterNumEl.innerHTML = "END!";
    stopTimer();
  } else if (playerTwoScore === totalRounds - 1) {
    console.log(`player 2 wins 2/${totalRounds} games`);
    roundCounterNumEl.textContent = "END!";
    stopTimer();
  }
};
function roundWinner() {
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
    setTimeout(playerOneWins(), 100);

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
    setTimeout(playerTwoWins(), 100);
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
    setTimeout(roundReset(), 100);
  }
}

// Select Countdown container
const countContainer = document.getElementById("countdown-number");
// Select action buttons
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
// Select timeout Audio element
const timeoutAudio = document.getElementById("timeout_audio");
// variable to store count
var startingTimer = 9;
var remainingTime = startingTimer;
// variable to store time interval
var timer;
// Variable to track whether timer is running or not
var isStopped = true;

// Function to start Timer
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    countdownEl.innerHTML = remainingTime.toFixed(1);
    timer = setInterval(renderTime, 10);
  }
};

// Function to stop Timer
const stopTimer = () => {
  isStopped = true;
  if (timer) {
    clearInterval(timer);
  }
  countdownEl.innerHTML = (0.0).toFixed(1);
};

// Function to reset Timer
const resetTimer = () => {
  isStopped = true;
  clearInterval(timer);
  remainingTime = Number(startingTimer);
  countdownEl.innerHTML = remainingTime;
};

// function to display time
const renderTime = () => {
  // decement time
  remainingTime -= 0.01;
  // render count on the screen
  countdownEl.innerHTML = remainingTime.toFixed(1);
  // timeout on zero
  if (remainingTime <= 0) {
    isStopped = true;
    clearInterval(timer);
    remainingTime = startingTimer;
    if (activePlayer === playerOne) {
      playerTwoWins();
    } else if (activePlayer === playerTwo) {
      playerOneWins();
    }
  }
};

function placeMarker(event) {
  var boxClicked = event.target;

  console.log(boxClicked);

  if (activePlayer === playerOne) {
    if (boxClicked.tagName.toLowerCase() == "span") {
      console.log("sqaure full 2");
      animationBounce();
    } else if (boxClicked.tagName.toLowerCase() === "div") {
      if (boxClicked.innerHTML === "") {
        boxClicked.innerHTML = playerOneToken;
        activePlayer = playerTwo;
        resetTimer();
        startTimer();
      }
    }

    roundWinner();
  } else if (activePlayer === playerTwo) {
    if (boxClicked.tagName.toLowerCase() == "span") {
      console.log("sqaure full 2");
      animationBounce();
    } else if (boxClicked.tagName.toLowerCase() === "div") {
      if (boxClicked.innerHTML === "") {
        boxClicked.innerHTML = playerTwoToken;
        activePlayer = playerOne;
        resetTimer();
        startTimer();
      }
    }

    roundWinner();
  }
}

var gameBoardEl = document.querySelector(".game-board");
gameBoardEl.addEventListener("click", placeMarker);

init();
