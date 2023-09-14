"use strict";

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollY = window.scrollY;
  const links = document.querySelector(".links");
  const linksA = document.querySelectorAll(".links a"); // Use querySelectorAll to select all links

  if (scrollY > 120) {
    // Adjust the scroll position at which the header becomes fixed
    header.classList.add("fixed");
    links.classList.add("fixed"); // Add the "fixed" class to the .links element

    // Loop through all links and add the "fixed" class to each one
    linksA.forEach((link) => {
      link.classList.add("fixed");
    });
  } else {
    header.classList.remove("fixed");
    links.classList.remove("fixed"); // Remove the "fixed" class from the .links element

    // Loop through all links and remove the "fixed" class from each one
    linksA.forEach((link) => {
      link.classList.remove("fixed");
    });
  }
});
