"use strict";

let secretNumber = randomNumber();
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) message("😐 Please Enter A Number!");
  else if (guess < 0 || guess > 20)
    message("😐😑 Please Enter A Value Between 0 to 20!");
  else if (guess !== secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? "😕 Too High!" : " 😢 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else message("😭 You Lost!");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    message("🎉😍 Congratulations, You Won!!! 💃🕺");
    document.querySelector(".circle").style.borderColor = "#00FF00";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = randomNumber();
  message("😁 Start Again!");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".circle").style.borderColor = "#d90429";
  document.querySelector(".guess").value = "";
});

function message(message) {
  document.querySelector(".message").textContent = message;
}

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
