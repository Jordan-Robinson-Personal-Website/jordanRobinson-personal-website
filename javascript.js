"use strict";

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollY = window.scrollY;
  const links = document.querySelector(".links");
  const linksA = document.querySelectorAll(".links a");

  if (scrollY > 120) {
    // Adjust the scroll position at which the header becomes fixed
    header.classList.add("fixed");
    links.classList.add("fixed"); // Apply the fixed class to the links container

    // Update the color of links within the fixed navigation bar
    linksA.forEach((link) => {
      link.classList.add("fixed");
    });
  } else {
    header.classList.remove("fixed");
    links.classList.remove("fixed"); // Remove the fixed class from the links container

    // Restore the color of links when not fixed
    linksA.forEach((link) => {
      link.classList.remove("fixed");
    });
  }
});

