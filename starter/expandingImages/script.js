const panel = document.querySelectorAll(".panel");

panel.forEach((el, i, arr) => {
  el.addEventListener("click", (e) => {
    removeActivePanel();
    el.classList.add("active");
  });
});

const removeActivePanel = function () {
  panel.forEach((el) => {
    el.classList.remove("active");
  });
};
