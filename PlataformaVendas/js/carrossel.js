let slideindex = 0;
let isTransitioning = false;

function mudarSlide(direcao){
    if (isTransitioning) return;
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    slideindex = (slideindex + direcao + totalSlides) % totalSlides;

    isTransitioning = true;
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translate X(-${slideIndex * 100}%)`;

    setTimeout(() => {
        isTransitioning= false;
        slides.style.transition = '';
    }, 500);
}

setInterval9(() => mudarSlides (1), 5000);