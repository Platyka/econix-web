const navMenuButtonEl = document.querySelector(".nav__menu");
const sideNavEl = document.querySelector(".side-nav");
const backdropEl = document.querySelector(".backdrop");
const headerCtaEl = document.querySelector(".header__cta");
const contactModalEl = document.querySelector(".modal-contact");
const modalCloseBtnEl = document.querySelector(".modal-contact__btn");
const navBtnEl = document.querySelector(".nav-btn");
const sideNavBtnEl = document.querySelector(".side-nav-btn");
const mapEl = document.querySelector(".modal-contact__map");

function initMap() {
  const uluru = { lat: 46.768078, lng: 23.589234 };
  const map = new google.maps.Map(mapEl, { zoom: 15, center: uluru });
  const marker = new google.maps.Marker({ position: uluru, map: map });
}

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
      contactModalEl.classList.remove("showModal");
    }
  });
}

function openContactModal() {
  if (headerCtaEl) {
    headerCtaEl.addEventListener("click", () => {
      contactModalEl.classList.add("showModal");
      backdropEl.classList.add("show");
    });
  }

  navBtnEl.addEventListener("click", event => {
    event.preventDefault();
    contactModalEl.classList.add("showModal");
    backdropEl.classList.add("show");
  });

  sideNavBtnEl.addEventListener("click", event => {
    event.preventDefault();
    contactModalEl.classList.add("showModal");
    backdropEl.classList.add("show");
    sideNavEl.classList.remove("open");
  });
}

function closeContactModal() {
  modalCloseBtnEl.addEventListener("click", () => {
    contactModalEl.classList.remove("showModal");
    backdropEl.classList.remove("show");
  });
}

openNav();
closeNav();
openContactModal();
closeContactModal();
