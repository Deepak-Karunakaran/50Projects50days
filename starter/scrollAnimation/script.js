"use strict";
const boxes = document.querySelectorAll(".box");

const checkboxes = function () {
  const boxHeight = (window.innerHeight / 5) * 3;
  console.log(document.querySelector(".box").getBoundingClientRect().top);
  boxes.forEach((el, li, arr) => {
    const top = el.getBoundingClientRect().top;
    if (top < boxHeight) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", checkboxes);
