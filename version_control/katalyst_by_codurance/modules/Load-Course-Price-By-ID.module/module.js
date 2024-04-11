"use strict";

setCoursePrice();

async function setCoursePrice() {
  const coursePrice = await fetchCoursePrice();
  const coursePriceTags = document.querySelectorAll(".price");

  coursePriceTags.forEach((coursePriceTag) => {
    const priceNumberTag = coursePriceTag.querySelector(".course-price-js");
    priceNumberTag.textContent = coursePrice;

    coursePriceTag.classList.add("price--shown");
  });
}

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
