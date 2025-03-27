let currentSlide = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none"));
  currentSlide++;
  if (currentSlide > slides.length) {
    currentSlide = 1;
  }
  slides[currentSlide - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);
