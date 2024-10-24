"use strict";

setCoursePrice();

async function setCoursePrice() {
  let coursePrice = await fetchCoursePrice();

  const coursePriceTags = document.querySelectorAll(".price");

  coursePriceTags.forEach((coursePriceTag) => {
    const priceNumberTag = coursePriceTag.querySelector(".course-price-js");
    const priceBaseTag = coursePriceTag.querySelector(".course-price-base");
    const priceSymbolTag = coursePriceTag.querySelector(".course-price-symbol");

    priceSymbolTag.textContent = coursePrice.currency.symbol;

    if (coursePrice.discountPrice === undefined || coursePrice.discountPrice === null) {
      priceNumberTag.textContent = coursePrice.basePrice.toString();
    } else {
      priceNumberTag.textContent = coursePrice.discountPrice.toString();
      priceBaseTag.textContent = coursePrice.basePrice.toString();
    }

    coursePriceTag.classList.add("price--shown");
  });
}

/**
 * @returns {Promise<{country: string, basePrice: number, discountPrice: number, currency: {iso: string, symbol: string}}>}
 * @example
 * // Example of a resolved Promise
 * // {
 * //   country: "Spain",
 * //   basePrice: 60.0,
 * //   discountPrice: 14.99,
 * //   currency: {
 * //     iso: "EUR",
 * //     symbol: "€"
 * //   }
 * // }
 */
async function fetchCoursePrice() {
  const courseData = JSON.parse(
    document.getElementById("course-data").textContent
  );
  const courseID = courseData.course_id;

  try {
    const urlEndpoint = `https://payment.katalystbycodurance.com/courses/${courseID}`;
    const response = await fetch(urlEndpoint);
    const data = await response.json();
    return data.price;
  } catch (error) {
    console.error(error);
  }
}
