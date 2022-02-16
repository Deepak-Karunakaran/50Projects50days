"use strict";
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

const update = function () {
  circles.forEach((el, i, arr) => {
    if (i < currentActive) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  console.log((actives.length - 1) / (circles.length - 1));
  const progress = (actives.length - 1) / (circles.length - 1);
  document.querySelector(".progress").style.width = progress * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});
