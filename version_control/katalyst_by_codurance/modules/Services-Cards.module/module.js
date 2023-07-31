"use strict";

const serviceListing = document.querySelector(".services-cards");
const serviceCards = serviceListing.querySelectorAll(".service-cards__card");

serviceCards.forEach((card) => {
  const graphic = card.querySelector(".service-cards__img");

  const observer = new IntersectionObserver(
    () => {
      graphic.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    },
    { threshold: 1.0 }
  );

  observer.observe(card);
});
