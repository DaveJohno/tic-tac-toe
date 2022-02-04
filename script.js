var activePlayer;
var playerOne = true;
var playerOneScore;
var playerTwo = false;
var playerTwoScore;
var roundNumber = 1;
var totalRounds;
var gameover;

//get the Dom's
var gameBoardSquareNodeList = document.querySelectorAll(".game-board-square");
var gameSquares = document.querySelector(".game-board-sqaure");

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
var countdownEl = document.querySelector(".time");
var starGameBtn = document.querySelector(".start-btn");
var optionsBtn = document.querySelector(".options-btn");
var overlay = document.querySelector(".overlay");
var OptionsMenuEl = document.querySelector(".options-menu");
var h1 = document.querySelector("h1");
var roundSelectorInputEl = document.querySelector("#roundNumber");
var optionsBackbtn = document.querySelector(".back-btn");
var defaultThemeBtn = document.querySelector(".theme-default-btn");
var retroThemeBtn = document.querySelector(".theme-retro-btn");
var themeHeading = document.querySelector(".theme-heading");
roundCounterBackground = document.querySelector(".round-counter");
var leftForground = document.querySelector(".forground-img-left");
var rightForground = document.querySelector(".forground-img-right");
var audioError = document.querySelector("#error");
var audioPlaceToken = document.querySelector("#placeToken");
var musicTrackOne = document.querySelector("#trackOne");
var musicTrackTwo = document.querySelector("#trackTwo");
var musicTrackThree = document.querySelector("#trackThree");
var musicTrackFour = document.querySelector("#trackFour");

//muic volume
musicTrackOne.volume = 0.2;
musicTrackTwo.volume = 0.2;
musicTrackThree.volume = 0.2;
musicTrackFour.volume = 0.2;

// effects volume
audioError.volume = 0.3;
audioPlaceToken.volume = 0.3;

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

// theme Class functions
//default
var defaultThemeClass = function () {
  bodyEl.classList.add("default");
  gameBoardEl.classList.add("default");
  playerOneScoreBoardEl.classList.add("default");
  playerTwoScoreBoardEl.classList.add("default");
  playerOneScoreEl.classList.add("default");
  playerTwoScoreEl.classList.add("default");
  roundCounterEl.classList.add("default");
  roundCounterNumEl.classList.add("default");
  mainMenuEl.classList.add("default");
  h1.classList.add("default");
  OptionsMenuEl.classList.add("default");
  themeHeading.classList.add("default");
  roundCounterBackground.classList.add("default");
  overlay.classList.add("default");

  bodyEl.classList.remove("retro");
  gameBoardEl.classList.remove("retro");
  bodyEl.classList.remove("retro");
  gameBoardEl.classList.remove("retro");
  playerOneScoreBoardEl.classList.remove("retro");
  playerTwoScoreBoardEl.classList.remove("retro");
  playerOneScoreEl.classList.remove("retro");
  playerTwoScoreEl.classList.remove("retro");
  roundCounterEl.classList.remove("retro");
  roundCounterNumEl.classList.remove("retro");
  mainMenuEl.classList.remove("retro");
  h1.classList.remove("retro");
  OptionsMenuEl.classList.remove("retro");
  themeHeading.classList.remove("retro");
  roundCounterBackground.classList.remove("retro");
  overlay.classList.remove("retro");
  s1.classList.remove("retro");
  s2.classList.remove("retro");
  s3.classList.remove("retro");
  s4.classList.remove("retro");
  s5.classList.remove("retro");
  s6.classList.remove("retro");
  s7.classList.remove("retro");
  s8.classList.remove("retro");
  s9.classList.remove("retro");
  leftForground.classList.remove("retro");
  rightForground.classList.remove("retro");
};
//retro
var retroThemeClass = function () {
  bodyEl.classList.add("retro");
  gameBoardEl.classList.add("retro");
  playerOneScoreBoardEl.classList.add("retro");
  playerTwoScoreBoardEl.classList.add("retro");
  playerOneScoreEl.classList.add("retro");
  playerTwoScoreEl.classList.add("retro");
  roundCounterEl.classList.add("retro");
  roundCounterNumEl.classList.add("retro");
  mainMenuEl.classList.add("retro");
  h1.classList.add("retro");
  OptionsMenuEl.classList.add("retro");
  retroThemeBtn.classList.add("retro");
  themeHeading.classList.add("retro");
  roundCounterBackground.classList.add("retro");
  overlay.classList.add("retro");
  s1.classList.add("retro");
  s2.classList.add("retro");
  s3.classList.add("retro");
  s4.classList.add("retro");
  s5.classList.add("retro");
  s6.classList.add("retro");
  s7.classList.add("retro");
  s8.classList.add("retro");
  s9.classList.add("retro");
  leftForground.classList.add("retro");
  rightForground.classList.add("retro");

  bodyEl.classList.remove("default");
  gameBoardEl.classList.remove("default");
  bodyEl.classList.remove("default");
  gameBoardEl.classList.remove("default");
  playerOneScoreBoardEl.classList.remove("default");
  playerTwoScoreBoardEl.classList.remove("default");
  playerOneScoreEl.classList.remove("default");
  playerTwoScoreEl.classList.remove("default");
  roundCounterEl.classList.remove("default");
  roundCounterNumEl.classList.remove("default");
  mainMenuEl.classList.remove("default");
  h1.classList.remove("default");
  OptionsMenuEl.classList.remove("default");
  retroThemeBtn.classList.remove("default");
  themeHeading.classList.remove("default");
  roundCounterBackground.classList.remove("default");
  overlay.classList.remove("default");
};

//music array
var musicTrackList = [
  musicTrackOne,
  musicTrackTwo,
  musicTrackThree,
  musicTrackFour,
];
console.log(musicTrackList);

function playMusic() {
  for (i = 0; i < musicTrackList.length; i++) {
    var x = musicTrackList[Math.floor(Math.random() * musicTrackList.length)];
  }
  x.play();
}
function stopMusic() {
  musicTrackList[i];
}

//audio play functions
function playAudioError() {
  audioError.play();
}

function playAudioPlaceToken() {
  audioPlaceToken.play();
}

//Themes settings
function defaultThemeSelection() {
  playerOneToken = circleImgMarker;
  playerTwoToken = crossImgMarker;
  defaultThemeClass();
}

function retroThemeSelection() {
  playerOneToken = "o";
  playerTwoToken = "x";
  retroThemeClass();
}
defaultThemeSelection();

//initial settings
var init = function () {
  for (var i = 0; i < gameBoardSquareNodeList.length; i++) {
    gameBoardSquareNodeList[i].innerHTML = "";
  }
  playerOneScore = 0;
  playerTwoScore = 0;
  roundNumber = 1;
  activePlayer = playerOne;
  gameover = false;
};

//round reset
var roundReset = function () {
  resetTimer();
  startTimer();
  roundNumber = roundNumber + 1;
  roundCounterNumEl.textContent = roundNumber;
  gameover = false;
  for (var i = 0; i < gameBoardSquareNodeList.length; i++) {
    gameBoardSquareNodeList[i].innerHTML = "";
  }
};

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
    setTimeout(() => {
      showMenu();
      fadeIn();
    }, 2000);

    gameover = true;
  } else if (playerTwoScore === totalRounds - 1) {
    console.log(`player 2 wins 2/${totalRounds} games`);
    roundCounterNumEl.textContent = "END!";
    stopTimer();
    setTimeout(() => {
      showMenu();
      fadeIn();
    }, 2000);

    gameover = true;
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

function fadeOut() {
  overlay.classList.remove("fade-in-animation");
  mainMenuEl.classList.remove("fade-in-animation");
  overlay.classList.add("fade-out-animation");
  mainMenuEl.classList.add("fade-out-animation");
}

function fadeIn() {
  overlay.classList.remove("fade-out-animation");
  mainMenuEl.classList.remove("fade-out-animation");
  overlay.classList.add("fade-in-animation");
  mainMenuEl.classList.add("fade-in-animation");
}

//main Menu
function hideMenu() {
  mainMenuEl.classList.add("hidden");
}
function showMenu() {
  mainMenuEl.classList.remove("hidden");
}

// Options Menu
function hideOptionsMenu() {
  OptionsMenuEl.classList.add("hidden");
}

function showOptionsMenu() {
  OptionsMenuEl.classList.remove("hidden");
}
function showOverlay() {
  overlay.classList.remove("hidden");
}
function hideOverlay() {
  overlay.classList.add("hidden");
}

//fade out menu and start game
function startGame() {
  playMusic();
  if (roundSelectorInputEl.value === "") {
    totalRounds = 3;
  } else if (roundSelectorInputEl.value !== "") {
    totalRounds = Number(roundSelectorInputEl.value);
    console.log(roundSelectorInputEl.value);
  }
  fadeOut();
  setTimeout(() => {
    hideMenu();
    hideOverlay();
    init();
    roundCounterNumEl.innerHTML = "1";
  }, 500);
}

//fade in menu after game finished
function OpenMenu() {
  showMenu();
  fadeIn();
}

//from main to options menu
function toOptionsMenu() {
  hideMenu();
  showOptionsMenu();
}

//options back to Main
function backToMainMenu() {
  if (roundSelectorInputEl.value === "") {
    console.log(roundSelectorInputEl.value);
    totalRounds = 3;
  } else if (roundSelectorInputEl.value !== "") {
    totalRounds = Number(roundSelectorInputEl.value);
    console.log(roundSelectorInputEl.value);
  }
  showMenu();
  hideOptionsMenu();
  init();
}

function placeMarker(event) {
  var boxClicked = event.target;
  if (gameover === true) {
    boxClicked.style.pointerEvent = "none";
  } else {
    boxClicked.style.pointerEvents = "auto";
    if (activePlayer === playerOne) {
      if (boxClicked.tagName.toLowerCase() == "span") {
        console.log("sqaure full 1");
        playAudioError();
        animationBounce();
      } else if (boxClicked.tagName.toLowerCase() === "div") {
        if (boxClicked.innerHTML === "") {
          playAudioPlaceToken();
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
        playAudioError();
        animationBounce();
      } else if (boxClicked.tagName.toLowerCase() === "div") {
        if (boxClicked.innerHTML === "") {
          playAudioPlaceToken();
          boxClicked.innerHTML = playerTwoToken;
          activePlayer = playerOne;
          resetTimer();
          startTimer();
        }
      }

      roundWinner();
    }
  }
}

starGameBtn.addEventListener("click", startGame);
optionsBtn.addEventListener("click", toOptionsMenu);
optionsBackbtn.addEventListener("click", backToMainMenu);
gameBoardEl.addEventListener("click", placeMarker);
defaultThemeBtn.addEventListener("click", defaultThemeSelection);
retroThemeBtn.addEventListener("click", retroThemeSelection);

init();
