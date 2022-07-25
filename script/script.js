const menuBtn = document.querySelector(`.hamburger__container`);
const burgerLink = document.querySelector(`.link`);

menuBtn.addEventListener(`click`, function () {
  menuBtn.classList.toggle("open");
  burgerLink.classList.toggle("show");
});
