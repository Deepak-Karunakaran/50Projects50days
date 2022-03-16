const labels = document.querySelectorAll(".form-control label");

console.log(labels);
labels.forEach((el, i, li) => {
  el.innerHTML = el.innerText
    .split("")
    .map((el, i) => `<span style='transition-delay:${i * 50}ms'>${el}</span>`)
    .join("");
});
