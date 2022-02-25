"use strict";
const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const loadInterval = function () {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  console.log(load);
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = 1 - load * 0.01;
  bg.style.filter = `blur(${100 - load}px)`;
};
let int = setInterval(loadInterval, 30);
