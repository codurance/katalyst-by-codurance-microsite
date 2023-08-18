const floatingBtn = document.querySelector(".btn.btn-floating");
const contactUsSection = document.querySelector("#contact-us");
const MOBILE_MAX_WIDTH = 786;

function updateBtnListeners() {
  floatingBtn.innerText = "Back to top";
  floatingBtn.addEventListener("click", scrollToTop);
}

function resetBtnListeners() {
  floatingBtn.innerText = "Contact us";
  floatingBtn.removeEventListener("click", scrollToTop);
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll", (e) => {
  const windowHeight = window.innerHeight;
  const isMobileWidth = window.innerWidth < MOBILE_MAX_WIDTH;
  const positionFromDOMBottom = window.scrollY + windowHeight;
  const targetPosition =
    document.body.offsetHeight - contactUsSection.offsetHeight;

  floatingBtn.style.display =
    isMobileWidth && window.scrollY > windowHeight ? "flex" : "none";

  if (positionFromDOMBottom >= targetPosition) {
    return updateBtnListeners();
  }

  return resetBtnListeners();
});
