document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next-slide");
    const prevBtn = document.querySelector(".prev-slide");

    let currentIndex = Array.from(slides).findIndex(slide => slide.classList.contains("active"));
    let autoplayInterval;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    function startAutoplay() {
      autoplayInterval = setInterval(nextSlide, 3000); // every 3 seconds
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
    });

    // Pause autoplay on hover over nav buttons
    [nextBtn, prevBtn].forEach(button => {
      button.addEventListener("mouseenter", stopAutoplay);
      button.addEventListener("mouseleave", startAutoplay);
    });

    // Start autoplay on page load
    startAutoplay();
  });

