document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector(".splide");

  const splide = new Splide(carouselElement, {
    type: "carousel",
    drag: true,
    autoWidth: true,
    gap: "3rem",

    pagination: false,
    focus: "center",
  }).mount();

  const header = document.querySelector(".header");
  splide.on("moved", function (newIndex) {
    if (newIndex === 0) {
      header.classList.remove("invisible");
      header.classList.add("visible");
    } else {
      header.classList.remove("visible");
      header.classList.add("invisible");
    }
  });
});
