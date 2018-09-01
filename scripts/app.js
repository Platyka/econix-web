const navMenuButtonEl = document.querySelector(".nav__menu");
const sideNavEl = document.querySelector(".side-nav");
const backdropEl = document.querySelector(".backdrop");

function openNav() {
  navMenuButtonEl.addEventListener("click", () => {
    sideNavEl.classList.add("open");
    backdropEl.classList.add("show");
  });
}

function closeNav() {
  window.addEventListener("click", event => {
    if (event.target.classList.contains("backdrop")) {
      sideNavEl.classList.remove("open");
      backdropEl.classList.remove("show");
    }
  });
}

openNav();
closeNav();
