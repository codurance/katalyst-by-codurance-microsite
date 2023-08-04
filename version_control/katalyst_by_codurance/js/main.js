"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const heroImageCanvas = document.querySelector(".hero-banner__image");
  const heroImage = heroImageCanvas.querySelector("img");

  const CANVAS_SIZE = parseInt(
    getComputedStyle(heroImageCanvas).getPropertyValue("--hero-image-height")
  );

  const observer = new IntersectionObserver(() => {
    heroImageCanvas.classList.toggle("visible");
  });

  observer.observe(heroImageCanvas);

  window.addEventListener("scroll", () => {
    applyParallaxEffect();
  });

  function applyParallaxEffect() {
    const imageScroll = window.scrollY / 2; //scroll halved to slow parallax

    if (scrollingHeroImage(imageScroll)) {
      heroImageCanvas.style.setProperty("--scroll", imageScroll + "px");
    }
  }

  function scrollingHeroImage(imageScroll) {
    return (
      heroImageCanvas.classList.contains("visible") &&
      imageScroll < calculateSpaceBetweenImageAndCanvas()
    );
  }

  function calculateSpaceBetweenImageAndCanvas() {
    return CANVAS_SIZE - heroImage.offsetHeight;
  }
});
