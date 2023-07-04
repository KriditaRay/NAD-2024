const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.style.opacity = idx === index ? 1 : 0;
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// You can add more functionality like previousSlide, auto-slide, etc.

// Show the first slide when the page loads
showSlide(currentSlide);
