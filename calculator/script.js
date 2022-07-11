"use strict";
const buttons = document.querySelectorAll(".item");

let input = document.getElementById("inputBox");
let buttonText = "";

for (const numButton of buttons) {
  numButton.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    calc(buttonText);
  });

  document.addEventListener("keydown", function (k) {
    if (
      k.key === numButton.textContent ||
      k.key === "Backspace" ||
      k.key === "Enter"
    ) {
      buttonText = k.key;
      calc(buttonText);
    }
  });
}

function calc(buttonText) {
  if (buttonText == "x") {
    buttonText = "*";
    input.textContent = input.textContent + buttonText;
  } else if (buttonText == "C" || buttonText == "Backspace") {
    input.textContent = "";
  } else if (buttonText == "=" || buttonText == "Enter") {
    input.textContent = eval(input.textContent);
  } else {
    input.textContent += buttonText;
  }
}
