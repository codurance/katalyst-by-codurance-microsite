const floatingBtn = document.querySelector(".btn.btn-floating");
const initialBtnText = floatingBtn.innerText;
const contactUsSection = document.querySelector("#contact-us");

const BASE_URL = window.location.origin + window.location.pathname;
const MOBILE_MAX_WIDTH = 786;

const icon = document.createElement("I");
icon.classList.add("las", "la-arrow-up");

function updateBtnListeners() {
  floatingBtn.addEventListener("click", scrollToTop);
  floatingBtn.innerText = null;
  floatingBtn.appendChild(icon);
}

function resetBtnListeners() {
  floatingBtn.removeEventListener("click", scrollToTop);
  floatingBtn.innerText = initialBtnText;
  floatingBtn.href = BASE_URL + "#contact-us";
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
