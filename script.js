document.addEventListener('DOMContentLoaded', () => {
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const sliderItems = document.querySelectorAll('.slider__item');
    const prevBtn = document.querySelector('.slider__arrow--prev');
    const nextBtn = document.querySelector('.slider__arrow--next');
    let currentIndex = 0;
    const totalSlides = sliderItems.length;

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('commentsForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const submitButton = document.getElementById('submitButton');
    const sectionTitle = document.querySelector('.comments__container h2'); // Заголовок секции

    submitButton.addEventListener('click', () => {
        form.style.display = 'none'; // Скрываем форму
        sectionTitle.style.display = 'none'; // Скрываем заголовок
        thankYouMessage.style.display = 'block'; // Показываем сообщение
    });
});

  document.addEventListener('DOMContentLoaded', () => {
    // ...ваш другой код...

    const btn = document.getElementById('btn');
    const videoSection = document.querySelector('.VIDEO');

    if (btn && videoSection) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            videoSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});