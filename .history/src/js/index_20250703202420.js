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

const burgerBtn = document.getElementById('burger-btn');
const sideMenu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');

burgerBtn.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

let brandSwiper = null;
let deviceSwiper = null;

function initSwipers() {
  const isMobile = window.innerWidth <= 768;

  // Инициализируем, если мобильный и Swiper ещё не создан
  if (isMobile && !brandSwiper) {
    brandSwiper = new Swiper('#more-brands', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '#more-brands .swiper-pagination',
        clickable: true,
      },
    });
  }

  if (isMobile && !deviceSwiper) {
    deviceSwiper = new Swiper('#more-devices', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: '#more-devices .swiper-pagination',
        clickable: true,
      },
    });
  }

  // Уничтожаем, если ПК и Swiper уже есть
  if (!isMobile && brandSwiper) {
    brandSwiper.destroy(true, true);
    brandSwiper = null;
  }

  if (!isMobile && deviceSwiper) {
    deviceSwiper.destroy(true, true);
    deviceSwiper = null;
  }
}

// При загрузке страницы
window.addEventListener('load', initSwipers);
// При изменении размера экрана
window.addEventListener('resize', initSwipers);