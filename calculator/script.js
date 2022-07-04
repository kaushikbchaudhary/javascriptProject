// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const zero = document.getElementById("zero");
// const dot = document.getElementById("dot");

// const one = 1;
// const two = 2;
// const three = 3;
// const four = 4;
// const five = 5;
// const six = 6;
// const seven = 7;
// const eight = 8;
// const nine = 9;
// const zero = 10;
// const dot = ".";
const buttons = document.querySelectorAll(".item");

// const plus = document.getElementById("plus");
// const min = document.getElementById("min");
// const mul = document.getElementById("mul");
// const div = document.getElementById("div");
// const equal = document.getElementById("equal");
let input = document.getElementById("inputBox");

// const allnumber = [
//   one,
//   two,
//   three,
//   four,
//   five,
//   six,
//   seven,
//   eight,
//   nine,
//   zero,
//   dot,
// ];
// let str;
for (const numButton of buttons)
  numButton.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    console.log(buttonText);

    if (buttonText == "x") {
      buttonText = "*";
      input.textContent += buttonText;
    } else if (buttonText == "C") {
      input.textContent = "";
    } else if (buttonText == "=") {
      input.textContent = eval(input.textContent);
    } else {
      input.textContent += buttonText;
    }
    // str += numButton;
    // input.textContent = str;
    // console.log(input.textContent);
  });

// min.addEventListener("click", function () {
//   console.log("clicked");
//   const ansCalc = Number(document.getElementById("inputBox").textContent);
//   input.textContent = ansCalc;
// });
// plus.addEventListener("click", function () {
//   console.log("clicked");
//   const ansCalc = Number(document.getElementById("inputBox").textContent);
//   input.textContent = ansCalc;
// });
// div.addEventListener("click", function () {
//   console.log("clicked");
//   const ansCalc = Number(document.getElementById("inputBox").textContent);
//   input.textContent = ansCalc;
// });
// mul.addEventListener("click", function () {
//   console.log("clicked");
//   const ansCalc = document.getElementById("inputBox").textContent;
//   input.textContent = ansCalc;
// });
// equal.addEventListener("click", function () {
//   console.log("clicked");
//   const ansCalc = eval(document.getElementById("inputBox").textContent);
//   input.textContent = ansCalc;
// });
// function result(input) {
//     /
// }
