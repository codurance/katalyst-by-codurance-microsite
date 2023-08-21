const floatingBtn = document.querySelector(".btn.btn-floating");
const contactUsSection = document.querySelector("#contact-us");
const MOBILE_MAX_WIDTH = 786;
const BASE_URL = window.location.origin + window.location.pathname;

const icon = document.createElement("I");
icon.classList.add("las", "la-arrow-up");

function updateBtnListeners() {
  floatingBtn.addEventListener("click", scrollToTop);
  floatingBtn.href = BASE_URL + "#";
  floatingBtn.innerText = null;
  floatingBtn.appendChild(icon);
}

function resetBtnListeners() {
  floatingBtn.removeEventListener("click", scrollToTop);
  floatingBtn.innerText = "Contact us";
  floatingBtn.href = BASE_URL + "#contact-us";
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", (e) => {
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
});
