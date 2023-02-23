// Year Auto Update
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// mobile nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
//
const header = document.querySelector("#collapseOne");

btnNavEl.addEventListener("click", function () {
  header.classList.remove("dropdown-menu");
  header.classList.toggle("collapse");
});

const head = document.querySelector("#collapseTwo");

btnNavEl.addEventListener("click", function () {
  head.classList.remove("dropdown-menu");
  head.classList.toggle("collapse");
});

const body = document.querySelector("#collapseThree");

btnNavEl.addEventListener("click", function () {
  body.classList.remove("dropdown-menu");
  body.classList.toggle("collapse");
});
