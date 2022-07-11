"use strict";
setInterval(setClock, 1000);
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
// setClock();
function setClock() {
  const currentDate = new Date();
  //   console.log(currentDate);
  //   console.log(currentDate.getSeconds());
  secondEl.textContent = currentDate.getSeconds();
  minuteEl.textContent = currentDate.getMinutes();
  hourEl.textContent = currentDate.getHours();
}
