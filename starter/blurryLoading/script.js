"use strict";
const loadingText = document.querySelector(".load-text");
const bg = document.querySelector(".bg");

let load = 0;

const loadInterval = function () {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  console.log(load);
};
let int = setInterval(loadInterval, 30);
