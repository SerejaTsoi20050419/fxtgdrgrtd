import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', () => {
  // Кнопки
  const toggleBrandsBtn = document.getElementById('toggleBrandsBtn');
  const toggleDevicesBtn = document.getElementById('toggleDevicesBtn');

  // Контейнеры контента
  const moreBrands = document.getElementById('more-brands');
  const moreDevices = document.getElementById('more-devices');
  

  function toggleContent(button, content) {
    button.addEventListener('click', () => {
      const isShrunk = content.classList.contains('more__content--shrinked');
      
      if (isShrunk) {
        // Развернуть
        content.classList.remove('more__content--shrinked');
        button.querySelector('.more__text').textContent = 'Скрыть';
        button.querySelector('.more__image').classList.remove('more__image--expand');
        button.querySelector('.more__image').classList.add('more__image--collapse'); // Для иконки "свернуть", если нужна

      } else {
        // Свернуть
        content.classList.add('more__content--shrinked');
        button.querySelector('.more__text').textContent = 'Показать все';
        button.querySelector('.more__image').classList.remove('more__image--collapse');
        button.querySelector('.more__image').classList.add('more__image--expand');
      }
    });
  }

  toggleContent(toggleBrandsBtn, moreBrands);
  toggleContent(toggleDevicesBtn, moreDevices);
});

document.getElementById('readMoreBtn').addEventListener('click', function () {
  const moreText = document.getElementById('moreText');
  const btn = this;

  if (moreText.style.display === 'none' || moreText.style.display === '') {
    moreText.style.display = 'block';
    btn.textContent = 'Скрыть';
  } else {
    moreText.style.display = 'none';
    btn.textContent = 'Читать далее';
  }
});

let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth <= 768 && !swiperInstance) {
    swiperInstance = new Swiper('#more-brands', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Другие опции
    });
  } else if (window.innerWidth > 768 && swiperInstance) {
    swiperInstance.destroy();
    swiperInstance = null;
  }
}

// Инициализация при загрузке
initSwiper();

// Инициализация при ресайзе
window.addEventListener('resize', () => {
  initSwiper();
});