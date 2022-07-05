"use strict";
const buttons = document.querySelectorAll(".item");

let input = document.getElementById("inputBox");
let buttonText = "";

for (const numButton of buttons) {
  console.log(typeof numButton);
  console.log(numButton.textContent);
  numButton.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    fname(buttonText);
  });

  document.addEventListener("keydown", function (k) {
    if (k.key === numButton.textContent) {
      console.log(k.key);
      buttonText += k.key;
      fname(buttonText);
      buttonText = "";
    }
  });
}

function fname(buttonText) {
  if (buttonText == "x") {
    buttonText = "*";
    input.textContent = input.textContent + buttonText;
  } else if (buttonText == "C") {
    input.textContent = "";
  } else if (buttonText == "=") {
    input.textContent = eval(input.textContent);
  } else {
    input.textContent += buttonText;
  }
}
