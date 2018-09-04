const navMenuButtonEl = document.querySelector(".nav__menu");
const sideNavEl = document.querySelector(".side-nav");
const backdropEl = document.querySelector(".backdrop");
const headerCtaEl = document.querySelector(".header__cta");
const contactModalEl = document.querySelector(".modal-contact");
const modalCloseBtnEl = document.querySelector(".modal-contact__btn");
const navBtnEl = document.querySelector(".nav-btn");
const sideNavBtnEl = document.querySelector(".side-nav-btn");
const mapEl = document.querySelector(".modal-contact__map");
const arrowLeft = document.querySelector(".review__arrows--left");
const arrowRight = document.querySelector(".review__arrows--right");
const userNameEl = document.querySelector(".review__user-name");
const userReviewEl = document.querySelector(".review__text");
const userImageEl = document.querySelector(".review__image");
const userRatingEl = document.querySelector(".review__rating");

const accordionItemsEl = document.querySelectorAll(".accordion__i");

const users = [
  {
    name: "Cosmin Dorgo",
    review: '"Recomand! Se lucreaza foarte rapid si bine!"',
    imgSrc: "img/user1.jpg",
    rating: "img/stars-1.svg"
  },
  {
    name: "Nagy David",
    review: '"Fast and quality service. I can only recommend it."',
    imgSrc: "img/user2.jpg",
    rating: "img/stars-1.svg"
  },
  {
    name: "Active Paper",
    review: '"Seriozitate maxima! Recomand!"',
    imgSrc: "img/user3.jpg",
    rating: "img/stars-1.svg"
  }
];

let currentIndex = 0;

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

function animationRightArrowClick() {
  userImageEl.style.animation = "slideToLeft 0.5s";
  userNameEl.style.animation = "slideToLeft 0.5s";
  userReviewEl.style.animation = "slideToLeft 0.5s";
  userRatingEl.style.animation = "slideToLeft 0.5s";
  setTimeout(() => {
    userImageEl.style.animation = "slideInRight 0.5s";
    userImageEl.src = users[currentIndex].imgSrc;
    userNameEl.innerHTML = users[currentIndex].name;
    userNameEl.style.animation = "slideInRight 0.5s";
    userReviewEl.innerHTML = users[currentIndex].review;
    userReviewEl.style.animation = "slideInRight 0.5s";
    userRatingEl.src = users[currentIndex].rating;
    userRatingEl.style.animation = "slideInRight 0.5s";
  }, 500);
}

function animationLeftArrowClick() {
  userImageEl.style.animation = "slideToRight 0.5s";
  userNameEl.style.animation = "slideToRight 0.5s";
  userReviewEl.style.animation = "slideToRight 0.5s";
  userRatingEl.style.animation = "slideToRight 0.5s";
  setTimeout(() => {
    userImageEl.style.animation = "slideInLeft 0.5s";
    userImageEl.src = users[currentIndex].imgSrc;
    userNameEl.innerHTML = users[currentIndex].name;
    userNameEl.style.animation = "slideInLeft 0.5s";
    userReviewEl.innerHTML = users[currentIndex].review;
    userReviewEl.style.animation = "slideInLeft 0.5s";
    userRatingEl.src = users[currentIndex].rating;
    userRatingEl.style.animation = "slideInLeft 0.5s";
  }, 500);
}

function nextTestimonial() {
  if (arrowRight) {
    arrowRight.addEventListener("click", () => {
      if (currentIndex < users.length - 1) {
        currentIndex++;
        arrowLeft.style.opacity = "1";
        animationRightArrowClick();
      }
      if (currentIndex === users.length - 1) {
        arrowRight.style.opacity = "0.4";
      }
    });
  }
}

function previousTestimonial() {
  if (arrowLeft) {
    arrowLeft.style.opacity = "0.4";
    arrowLeft.addEventListener("click", () => {
      if (currentIndex !== 0) {
        currentIndex--;
        arrowRight.style.opacity = "1";
        animationLeftArrowClick();
      }
      if (currentIndex === 0) {
        arrowLeft.style.opacity = "0.4";
      }
    });
  }
}

function accordion() {
  if (accordionItemsEl === true) {
    accordionItemsEl[0].firstElementChild.nextElementSibling.style.maxHeight =
      accordionItemsEl[0].firstElementChild.nextElementSibling.scrollHeight +
      "px";
    accordionItemsEl[0].firstElementChild.lastElementChild.style.transform =
      "rotate(180deg)";
    for (let item of accordionItemsEl) {
      let accHeader = item.firstElementChild;
      accHeader.addEventListener("click", () => {
        let accDetails = accHeader.nextElementSibling;
        if (accDetails.style.maxHeight) {
          accDetails.style.maxHeight = null;
          accHeader.lastElementChild.style.transform = "rotate(0)";
        } else {
          accDetails.style.maxHeight = accDetails.scrollHeight + "px";
          accHeader.lastElementChild.style.transform = "rotate(180deg)";
        }
      });
    }
  }
}

openNav();
closeNav();
openContactModal();
closeContactModal();
nextTestimonial();
previousTestimonial();
accordion();
