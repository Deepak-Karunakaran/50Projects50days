const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const stopSongs = function () {
  sounds.forEach((el, i, li) => {
    const song = document.getElementById(el);
    song.pause();
    song.currentTime = 0;
  });
};

sounds.forEach((el, i, li) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = el;
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(el).play();
  });

  document.getElementById("button").appendChild(btn);
});
