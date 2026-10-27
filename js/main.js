// * mobile menu
function openMenu() {
  const burgerBtn = document.querySelector(".burger-menu__btn");
  const burgerIcon = document.querySelector(".burger-menu__icon");
  const navbar = document.querySelector(".navbar__body");
  document.querySelectorAll(".menu__link").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("navbar--opem");
      burgerIcon.classList.remove("burger-menu__icon-active");
    });
  });
  burgerBtn.addEventListener("click", function () {
    burgerIcon.classList.toggle("burger-menu__icon-active");
    navbar.classList.toggle("navbar--opem");
  });
}
openMenu();
