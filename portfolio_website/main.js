//JS
const body = document.querySelector("body");
const menueToggle = document.querySelector(".hamburder-menu");
const hero = document.querySelector(".hero");
const navList = document.querySelector(".nav-list");

navList.addEventListener("click", function (e) {
  let target = e.target;

  if (target.classList[0] === "nav-link") {
    body.classList.remove("is-open");
  }
});

menueToggle.addEventListener("click", function () {
  body.classList.toggle("is-open");
  hero.classList.add("is-open");
});

window.addEventListener("click", function (e) {
  let clicked = e.target;
  console.dir(window);

  if (clicked.matches(".is-open")) {
    body.classList.remove("is-open");
    hero.classList.remove("is-open");
  }
});
