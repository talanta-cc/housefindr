const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const images = document.querySelectorAll(".slider-images img");
const sliderImages = document.querySelector('.slider-images');

function slideImages() {
  currentIndex = (currentIndex + 1) % images.length;
  document.querySelector(".slider-images").style.transform = `translateX(-${currentIndex * 100}vw)`;
}

setInterval(slideImages, 3000); // Automatically slide every 3 seconds

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const translateX = -currentIndex * 100;
  sliderImages.style.transform = `translateX(${translateX}%)`;
}

setInterval(showNextImage, 3000);

prevButton.addEventListener('click', () => {
    moveSlide(-1);
});

nextButton.addEventListener('click', () => {
    moveSlide(1);
});

function moveSlide(direction) {
    const slides = document.querySelectorAll('.property-card');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelectorAll('.love-emoji').forEach(emoji => {
    emoji.addEventListener('click', () => {
        emoji.classList.toggle('red');
    });
});
