const floatingBtn = document.querySelector(".btn.btn-floating");
const buttonIcon = floatingBtn.querySelector(".icon");
const contactUsSection = document.querySelector("#contact-us");

const MOBILE_MAX_WIDTH = 1024;

function updateBtnListeners() {
  floatingBtn.addEventListener("click", scrollToTop);
  buttonIcon.classList.remove("la-envelope");
  buttonIcon.classList.add("la-arrow-up");
}

function resetBtnListeners() {
  floatingBtn.removeEventListener("click", scrollToTop);
  buttonIcon.classList.remove("la-arrow-up");
  buttonIcon.classList.add("la-envelope");
}

function scrollToTop(e) {
  e.preventDefault();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener(
  "scroll",
  () => {
    const windowHeight = window.innerHeight;
    const isMobileWidth = window.innerWidth < MOBILE_MAX_WIDTH;
    const positionFromBottom = window.scrollY + windowHeight;
    const targetPosition =
      document.body.offsetHeight - contactUsSection.offsetHeight;

    floatingBtn.style.display =
      isMobileWidth && window.scrollY > windowHeight ? "flex" : "none";

    positionFromBottom >= targetPosition
      ? updateBtnListeners()
      : resetBtnListeners();
  },
  { passive: true }
);
