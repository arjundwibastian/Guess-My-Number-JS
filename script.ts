"use strict";

let secretNumber: number = Math.trunc(Math.random() * 20) + 1;
let score: number = 20;
let highscore: number = 0;

console.log("Secret number is", secretNumber);

(document.querySelector(".check") as HTMLButtonElement).addEventListener(
  "click",
  function () {
    const guess: number = Number(
      (document.querySelector(".guess") as HTMLInputElement).value,
    );
    console.log(guess);

    // when there is no input
    if (!guess) {
      (document.querySelector(".message") as HTMLElement).textContent =
        "No number!";

      // when player wins
    } else if (guess === secretNumber) {
      (document.querySelector(".message") as HTMLElement).textContent =
        "Correct Number!";
      (document.querySelector(".number") as HTMLElement).textContent =
        String(secretNumber);
      (document.querySelector("body") as HTMLElement).style.backgroundColor =
        "#60b347";
      (document.querySelector(".number") as HTMLElement).style.width = "30rem";

      if (score > highscore) {
        highscore = score;
        (document.querySelector(".highscore") as HTMLElement).textContent =
          String(highscore);
      }

      // when guess is too high
    } else if (guess > secretNumber) {
      if (score > 1) {
        (document.querySelector(".message") as HTMLElement).textContent =
          "Too high!";
        score = score - 1;
        (document.querySelector(".score") as HTMLElement).textContent =
          String(score);
      } else {
        (document.querySelector(".message") as HTMLElement).textContent =
          "You lost the game!";
        (document.querySelector(".score") as HTMLElement).textContent = "0";
      }

      // when guess is too low
    } else if (guess < secretNumber) {
      if (score > 1) {
        (document.querySelector(".message") as HTMLElement).textContent =
          "Too low!";
        score = score - 1;
        (document.querySelector(".score") as HTMLElement).textContent =
          String(score);
      } else {
        (document.querySelector(".message") as HTMLElement).textContent =
          "You lost the game!";
        (document.querySelector(".score") as HTMLElement).textContent = "0";
      }
    }
  },
);

(document.querySelector(".again") as HTMLButtonElement).addEventListener(
  "click",
  function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    console.log("New secret number is", secretNumber);

    (document.querySelector(".message") as HTMLElement).textContent =
      "Start guessing...";
    (document.querySelector(".score") as HTMLElement).textContent =
      String(score);
    (document.querySelector(".number") as HTMLElement).textContent = "?";
    (document.querySelector(".guess") as HTMLInputElement).value = "";

    (document.querySelector("body") as HTMLElement).style.backgroundColor =
      "#222";
    (document.querySelector(".number") as HTMLElement).style.width = "15rem";
  },
);
