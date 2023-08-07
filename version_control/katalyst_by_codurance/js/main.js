"use strict";

const observer = new IntersectionObserver(fadeInOnIntersection);

function fadeInOnIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, filter: "blur(5px)" },
          { opacity: 1, filter: "blur(0px)" }
        ],
        500
      );
      observer.unobserve(entry.target);
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".fade-in");

  fadeInElements.forEach((element) => {
    observer.observe(element);
  });
});
