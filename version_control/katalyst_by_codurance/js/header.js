"use strict";

window.addEventListener("DOMContentLoaded", () => {
  let scrollTop = 0;
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    const currentScrollTop = window.scrollY;
    const heightThreshold = 150;

    if (currentScrollTop > heightThreshold) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    scrollTop = currentScrollTop;
  });
});
