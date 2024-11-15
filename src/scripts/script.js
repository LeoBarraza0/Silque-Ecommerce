let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
        slide.style.display = 'block';
    });
}

function changeSlide(direction) {
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    showSlide(slideIndex);
}

function autoSlide() {
    changeSlide(1);
    setTimeout(autoSlide, 3000); // Cambia cada 3 segundos
}

// Inicializa el carrusel
showSlide(slideIndex);
autoSlide();