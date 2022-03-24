"use strict";

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = function () {
  const config = {
    headers: {
      accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com/", config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
};

jokeBtn.addEventListener("click", generateJoke);

// generateJoke();
