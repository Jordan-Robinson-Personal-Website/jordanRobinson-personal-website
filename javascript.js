window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    // Adjust the scroll position at which the header becomes fixed
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
