var numSquares = 6;
var colors = [];
var pickedColor;

var app = document.getElementById("app");
var eleSquares = app.querySelectorAll(".color-grid-item");
var eleHeader = app.querySelector("header");
var displayColor = app.querySelector("#colorDisplay");
var displayMessage = app.querySelector("#notification");
var btnReset = app.querySelector("#navBrand");
var btnModes = app.querySelectorAll(".mode");

init();

function init() {
  // Initialise the mode buttons which set difficulty
  initModeButtons();

  // Initialises the squares with colours - generate random, pick a colour then display it etc.
  initSquares();

  // Reset the game
  resetGame();
}

btnReset.addEventListener("click", function() {
  this.preventDefault;
  resetGame();
})

function initModeButtons() {
  for (var i = 0; i < btnModes.length; i++) {
    btnModes[i].addEventListener("click", function() {
      btnModes[0].classList.remove("active");
      btnModes[1].classList.remove("active");
      this.classList.add("active");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      resetGame();
    });
  }
}

function initSquares() {
  for (var i = 0; i < eleSquares.length; i++) {
    eleSquares[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        displayMessage.textContent = "Correct";
        btnReset.textContent = "Play Again?"
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "#201f20";
        displayMessage.textContent = "Try Again";
      }
    });
  }
}

function resetGame() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
  btnReset.textContent = "New Colo(u)rs";
  displayMessage.textContent = "";
  for (var i = 0; i < eleSquares.length; i++) {
    if (colors[i]) {
      eleSquares[i].style.display = "block";
      eleSquares[i].style.backgroundColor = colors[i];
    } else {
      eleSquares[i].style.display = "none";
    }
  }
  eleHeader.style.backgroundColor = "steelblue"
}

function changeColors(color) {
  for (var i = 0; i < eleSquares.length; i++) {
    eleSquares[i].style.backgroundColor = pickedColor;
    eleHeader.style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random];
}

function generateRandomColors(amount) {
  var arr = [];

  for (var i = 0; i < amount; i++) {
    arr.push(randomColor())
  }

  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`
}